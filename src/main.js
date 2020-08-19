/* eslint-disable */

import Vue from "vue";

Vue.config.productionTip = false;

Vue.component("task", {
  props: ["todo", "index"],
  methods: {
    delTodo() {
      this.$emit("del-todo");
    },
    chstat() {
      this.$emit("change-status");
    }
  },
  template: `
      <li>
        <div class="todo-pane" :class="{ done: todo.status_done}">
            <span @click="delTodo" class="todo-delete"><i class="fas fa-times"></i></span>
            <h3 class="todo-title">{{todo.title}}</h3>
            <span class="todo-date">{{todo.date}}</span>
            <input type="checkbox" class="todo-status" name="done" :checked="todo.status_done" @click="chstat">
        </div>
      </li>
    `
});
/* eslint-disable no-new */
var vue = new Vue({
  el: "#app",
  data: {
    todo_model: {
      title: "",
      date: "",
      status_done: false
    },
    todos: [
      {
        title: "Какая-то задача",
        date: "01.02.2020",
        status_done: false
      },
      {
        title: "Ещё какая-то задача",
        date: "01.03.2566",
        status_done: true
      },
      {
        title: "Другая задача",
        date: "01.12.4562",
        status_done: false
      }
    ],
    todos_deleted: []
  },
  methods: {
    addTodo() {
      if (this.todo_model.title != "") {
        this.todos.push({
          title: this.todo_model.title,
          descr: this.todo_model.descr,
          date: new Date().toLocaleDateString(),
          status_done: this.todo_model.status_done
        });
      }
      this.todo_model.title = "";
      this.todo_model.descr = "";
      this.todo_model.status_done = false;
    },
    changeTodoStatus(key) {
      var index = this.todos.length - key - 1;
      let old_status = this.todos[index].status_done;
      this.todos[index].status_done = !old_status;
    },
    deleteTodo(key) {
      var index = this.todos.length - key - 1;
      this.todos_deleted.push(this.todos[index]);
      this.todos.splice(index, 1);
    },
    deleteTodoForever(key) {
      var index = this.todos_deleted.length - key - 1;
      this.todos_deleted.splice(index, 1);
    }
  }
});
