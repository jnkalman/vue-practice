Vue.component('tasks', {
  template: '#tasks-template',
  props: ['list'],
  computed: {
    remaining: function() {
      var vm = this;
      return this.list.filter(this.inProgress).length;
    }
  },
  methods: {
    isCompleted: function(task) {
      return task.completed;
    },

    inProgress: function(task) {
      return ! this.isCompleted(task);
    },

    deleteTask: function(task) {
      this.list.$remove(task);
    },

    clearCompleted: function() {
      this.list = this.list.filter(this.inProgress);
    }
  }
});
  // viewmodel binds to view and to model
  new Vue({
    el: "#app",
    data: {
      tasks: [
        { description: 'Go to the store', completed: false },
        { description: 'Go to the bank', completed: false },
        { description: 'Get a taco', completed: true }
      ]
    }
  });
