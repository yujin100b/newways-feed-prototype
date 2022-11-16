import { createApp } from "vue";
import createPersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex'
import { router } from "./router";
import App from "./App.vue";


const store = createStore({
  state () {
    return {
      addr: localStorage.getItem('vuex') ? JSON.parse(localStorage.getItem('vuex')).addr : '',
      checked: localStorage.getItem('vuex') ? JSON.parse(localStorage.getItem('vuex')).checked : '',
      followed: localStorage.getItem('vuex') ? JSON.parse(localStorage.getItem('vuex')).followed : '',
    }
  },
  mutations: {
    setAddr (state, value) {
      state.addr = value
    },
    setChecked (state, value) {
      state.checked = value
    },
    setFollowed (state, value) {
      const newValue = new Set([...state.followed, ...value])
      state.followed = [...newValue]
    },
    reduceFollowed(state, value) {
      state.followed = state.followed.filter((el)=> el !== value)
    }
  },
  plugins: [createPersistedState()],
})

// Create Vue Instance
const app = createApp(App);

app.use(router); // 사용 설정 하기
app.use(store)
app.mount("#app");
