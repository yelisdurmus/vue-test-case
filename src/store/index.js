import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookList: [
      { bookID: 1, bookName: 'Sefiller', author:'Victor Hugo', bookUrl:'https://2.bp.blogspot.com/-1YcQ0zzGT3Y/Te9nBixz8QI/AAAAAAAABG8/yMDHofcdJh8/s1600/sefiller-victor-hugo-sefiller-kitab-%25C3%25B6zeti.jpg' },
      { bookID: 2, bookName: 'Simyacı', author:'Paulo Coelho', bookUrl:''  },
      { bookID: 3, bookName: 'Dava', author:'Franz Kafka', bookUrl:''  },
      { bookID: 4, bookName: 'Satranç', author:'Stefan Zweig', bookUrl:''  },
    ],
    userList: [
      { number: 1, name: 'Yeliz Durmuş', adress:'aaaaaaa', book:'Dava' },
      { number: 2, name: 'Ahmet Demir', adress:'bbbbbbo', book:'Sefiller'  },
      { number: 3, name: 'Deniz Oruç', adress:'jkdhkkjklla', book:'Simyacı'  },
      { number: 4, name: 'Fatma Yılmaz', adress:'jklşks', book:'Satranç'  },
    ],
  },
  mutations: {
    SET_BOOK(state, book) {
      state.bookList.push(book);
    },
    SET_USER(state, user) {
      state.userList.push(user);
    },
  },
  actions: {
  },
  getters:{
    getBook: (state) => state.bookList,
    getUser: (state) => state.userList,
  },
  modules: {
  }
})
