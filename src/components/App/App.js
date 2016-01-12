import Vue from 'vue';

let App = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    newTodo: '',
    todos: [
      { text: 'Add some todos' }
    ]
  },
  methods: {
    addTodo() {
      let text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text: text });
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
});

export default App;