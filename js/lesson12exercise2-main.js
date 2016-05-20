Vue.component('alert', {
  template: '#alert-template',
  props: ['type', 'message']

});

new Vue({
  el: "body",
  data: {
    types: [
      {type: 'success'},
      {type: 'error'}
    ],
    message: 'hi'

  }
});
