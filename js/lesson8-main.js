Vue.component('tasks', {
  template: '#tasks-template',
  props: ['list']
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
