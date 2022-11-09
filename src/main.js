import { createApp } from "vue";
import createPersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex'
import { router } from "./router";
import App from "./App.vue";


const store = createStore({
  state () {
    return {
      addr: localStorage.getItem('vuex') ? JSON.parse(localStorage.getItem('vuex')).addr : ''
    }
  },
  mutations: {
    setAddr (state, value) {
      state.addr = value
    }
  },
  plugins: [createPersistedState()],
})

// Create Vue Instance
const app = createApp(App);

app.use(router); // 사용 설정 하기
app.use(store)
app.mount("#app");
