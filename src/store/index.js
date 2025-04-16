import { createStore } from "vuex";
import coachsModule from "./modules/coaches/index.js";

const store = createStore({
    modules: {
        coaches: coachsModule
    }
})

export default store;

