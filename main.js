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

// ajoute un ou plusieurs éléments à la fin d'un tableau
setTimeout(function(){vm.personnes.push({nom: "Claret", prenom: "Marcel"});}, 2000);
// supprime le dernier élément d'un tableau et retourne cette valeur
setTimeout(function(){vm.personnes.pop();}, 4000);
// ajoute un ou plusieurs éléments au début d'un tableau
setTimeout(function(){vm.personnes.unshift({nom: "Claret", prenom: "Marcel"});}, 6000);
// permet de retirer le premier élément d'un tableau
setTimeout(function(){vm.personnes.shift();}, 8000);
//  modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant des nouveaux éléments.
setTimeout(function(){vm.personnes.splice(1, 1, {nom: "Claret", prenom: "Marcel"});}, 10000);

setTimeout(function(){vm.personnes.sort(function (a, b) { return (a.nom > b.nom) });}, 12000);
