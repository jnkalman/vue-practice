Vue.component('alert', {
  template: '#alert-template',
  props: ['type'],
  data: function() {
    return {
      show: true
    };
  },
  computed: {
    alertClasses: function() {
      var type = this.type;
      return {
        'Alert': true,
        'success': type == 'success',
        'error': type == 'error'
      }
    }
  }
});

new Vue({
  el: "body",
  data: {


  }
});
