<template>
  <div class="ui centered card">
    <div class="content" v-show="!isEditting">
      <div class="header">
        <div class="ui checkbox">
          <input type="checkbox" name="checkDone" id="checkDone" v-model="todo.done">
          <label for="checkDone">{{ todo.title }}</label>
        </div>
        <div class="right floated">
          <span class="edit icon button" v-on:click="toogleForm">
            <i class="edit icon"></i>
          </span>
          <span class="trash icon" v-on:click="removeTodo(todo.id)">
            <i class="trash icon"></i>
          </span>
        </div>
      </div>
    </div>

    <div class="content" v-show="isEditting">
      <div class="ui form">
        <div class="field">
          <label for="title">Title</label>
          <input type="text" v-model="todo.title">
        </div>
        <div class="ui two button attached buttons">
          <button class="ui basic blue button" v-on:click="toogleForm">Close X</button>
        </div>
      </div>
    </div>
    <div class="ui positive message" v-show="todo.done">Completed</div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["todo"],
  data() {
    return {
      isEditting: false
    };
  },
  methods: {
    toogleForm() {
      this.isEditting = !this.isEditting;
    },
    removeTodo(todoId) {
      this.$emit("remove-todo", todoId);
    }
  }
};
</script>