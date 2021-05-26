import { createStore } from 'vuex'
let phone = '';

export default createStore({
  state() {
    return{
      articleCount: 123,
      order: 0,
      phone
    }
  },
    mutations: {
      setPhone(state, payload) {
        state.phone = payload
          try {
      window.localStorage.setItem('defaultPhone', JSON.stringify(state.phone));
      // 数据改变的时候把数据拷贝一份保存到localStorage里面
      } catch (e) {}
      }
    }
})
