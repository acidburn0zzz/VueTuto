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

setTimeout(function(){
  vm.personnes = vm.personnes.concat([
    {nom: "Claret", prenom: "Marcel"},
    {nom: "Verlou", prenom: "Gustave"}
  ]);
}, 2000);
setTimeout(function(){vm.personnes = vm.personnes.slice(1, 4);}, 4000);
