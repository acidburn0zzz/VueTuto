var vm = new Vue({
  el: '#app',
  data: {
    personnes: [
      {nom: "Durand", prenom: "Jacques"},
      {nom: "Dupont", prenom: "Albert"},
      {nom: "Martin", prenom: "Denis"},
    ]
  }
});

lg = vm.personnes.length;
vm.personnes.$set(1, {nom: "Claret", prenom: "Marcel"});
