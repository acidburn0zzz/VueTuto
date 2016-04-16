var vm = new Vue({
  el: '#app',
  data: {
    personnes: [
      {nom: "Claret", prenom: "Marcel"},
      {nom: "Durand", prenom: "Jacques"},
      {nom: "Dupont", prenom: "Albert"},
      {nom: "Martin", prenom: "Denis"},
      {nom: "Torlet", prenom: "Arthur"},
    ],
    trash: []
  },
  methods: {
    erase (index) {
      this.trash.push(this.personnes[index]);
      this.personnes.splice(index,1);
      this.trash.sort(order);
    },
    restore (index) {
      this.personnes.push(this.trash[index]);
      this.trash.splice(index, 1);
      this.personnes.sort(order);
    },
    Delete (index) {
      this.trash.splice(index, 1)
    },
    eraseAll () {
      this.trash = this.trash.concat(this.personnes);
      this.trash.sort(order);
      this.personnes = [];
    },
    restoreAll () {
      this.personnes = this.personnes.concat(this.trash);
      this.personnes.sort(order);
      this.trash = [];
    },
    deleteAll () {
      this.trash = [];
    }
  }
});

var order = function (a, b) { return (a.nom > b.nom) };
