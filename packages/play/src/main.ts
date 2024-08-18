import { createApp } from "vue";
import App from "./App.vue";
import "sungrow-ui/dist/index.css";
import SungrowUI from "sungrow-ui";
const app = createApp(App);
app.use(SungrowUI);
app.mount("#app");
