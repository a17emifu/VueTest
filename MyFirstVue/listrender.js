Vue.createApp({
    data() {
      return {
        items: [{ message: 'Foo' }, { message: 'Bar' }]
      }
    }
  }).mount('#array-rendering')

  Vue.createApp({
      data(){
          return {
              myObj: {
                  title: 'Test',
                  name: 'Vue',
                  date: '2021-06-11'
              }
          }
      }
  }).mount('#array-rendering2')

  Vue.createApp({
    data() {
      return {
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    }
  }).mount('#v-for-object')