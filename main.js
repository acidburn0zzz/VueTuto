Vue.component('tasks', {
  props: ['list'],
  template: '#tasks-template'
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
