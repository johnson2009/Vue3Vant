import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupVantComponent } from "./plugins/vant";

const app = createApp(App);
app.use(router);

setupVantComponent(app);

app.mount("#app");
