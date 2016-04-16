new Vue({
  el: '#tuto',
  data: {
    items: [
      "Je suis l'item 1",
      "Je suis l'item 2",
      "Je suis l'item 3"
    ]
  },
  methods: {
    getFruit: function (index) {
      alert('Je suis ' + this.items[index])
    }
  }
});
