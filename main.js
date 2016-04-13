Vue.component('tasks', {
  template: '#tasks-template',
  props: ['list'],
  computed: {
    remaining: function() {
      return this.list.filter(function(task) {
          return ! task.completed;
      }).length;
    }
  }
});

new Vue({
    el: '#app',

    data: {
        tasks: [
            { body: 'Go to the shop', completed: false },
            { body: 'Go to the bank', completed: false },
            { body: 'Go to the dentist', completed: true }
        ]
    }
})
