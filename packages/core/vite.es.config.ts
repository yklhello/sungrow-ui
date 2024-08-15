import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from 'vite-plugin-dts'; // 自动生成 d.ts
import { readdirSync } from "node:fs";
import { filter, map } from "lodash-es";
import hooksPlugin from "./hooksPlugin";
import { readdir } from "fs";
import { defer, delay } from "lodash-es";
import shell from 'shelljs'
import terser from "@rollup/plugin-terser";


const TRY_MOVE_STYLES_DELAY = 750 as const;
function moveStyles() {
  readdir("./dist/es/theme", (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.mv("./dist/es/theme", "./dist"));
  });
}
function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";
export default defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: "../../tsconfig.build.json",
    outDir: "dist/types",
  }), hooksPlugin({
    rmFiles: [
      "./dist/es",
      "./dist/theme",
      "./dist/types"
    ],
    afterBuild: moveStyles
  }), terser({
    compress: {
      sequences: isProd,
      arguments: isProd,
      drop_console: isProd && ["log"],
      drop_debugger: isProd,
      passes: isProd ? 4 : 1,
      global_defs: {
        "@DEV": JSON.stringify(isDev),
        "@PROD": JSON.stringify(isProd),
        "@TEST": JSON.stringify(isTest),
      },
    },
    format: {
      semicolons: false,
      shorthand: isProd,
      braces: !isProd,
      beautify: !isProd,
      comments: !isProd,
    },
    mangle: {
      toplevel: isProd,
      eval: isProd,
      keep_classnames: isDev,
      keep_fnames: isDev,
    }
  })],
  build: {
    outDir: "dist/es",
    minify: false,
    cssCodeSplit: true,
    sourcemap: !isProd,
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "SungrowUI",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator",
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          if (assetInfo.type === 'asset' && /\.(css)$/i.test(assetInfo.name as string)) {
            return 'theme/[name].[ext]'
          }
          return assetInfo.name as string;
        },
        manualChunks(id) {
          if (id.includes("node_modules")){
            return 'vendor'
          }
          if (id.includes("/packages/hooks")){
            return 'hooks'
          }
          if (id.includes("/packages/utils") || id.includes("plugin-vue:export-helper")){
            return 'utils'
          }
          for (const item of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${item}`)) return item;
          }
        }
      },
    },
  },
});
