import { createApp } from "vue";
import App from "./App.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import "./style.scss";
import router from "./router/index";
import store from "./store/index";
import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js";

const app = createApp(App);

app.component("Collapse", Collapse).use(router).use(store).mount("#app");
