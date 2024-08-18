import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { makeInstaller } from "@sungrow-ui/utils";
import components from "./components";
import "@sungrow-ui/theme";

library.add(fas);
const installer = makeInstaller(components);
export * from "@sungrow-ui/components";
export default installer;
