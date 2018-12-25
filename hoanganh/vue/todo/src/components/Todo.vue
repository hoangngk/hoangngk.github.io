<template>
  <div class="ui centered card">
    <div class="content" v-show="!isEditing">
      <div class="header">{{ todo.title }}</div>
      <div class="extra content">
        <span class="ui bottom attached green basic button" v-on:click="showForm">Edit</span>
        <span class="ui bottom attached red basic button" v-on:click="deleteTodo(todo)">Delete</span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input type="text" v-model="todo.title">
        </div>
        <div class="ui two button attached buttons">
          <button class="ui basic blue button" v-on:click="hideForm">Close X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    }
  }
};
</script>
