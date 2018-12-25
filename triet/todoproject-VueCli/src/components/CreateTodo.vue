<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-on:click="toogleForm" v-show="!isCreating">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="titleText" type="text" ref="title" defaultValue>
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="sendForm()">Create</button>
            <button class="ui basic red button" v-on:click="toogleForm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: "",
      isCreating: false
    };
  },
  methods: {
    toogleForm() {
      this.isCreating = !this.isCreating;
    },

    sendForm() {
      if (this.titleText.length > 0) {
        this.$emit("add-todo", this.titleText);
      }
      this.titleText = "";
      this.isCreating = false;
    }
  }
};
</script>