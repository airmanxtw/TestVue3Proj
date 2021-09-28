import { createApp, h } from "vue"
import main from "components/main";

const init={
    render(){return h(main)}
};

createApp(init).mount("#app");

