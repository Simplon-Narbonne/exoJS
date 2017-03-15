var boucler = true

var members = ['Aida67','lapie002','anneserrano','Jennysmille','nunkabuk','RCosson','kaonb-ax','FerEmilie','crazychouwi', 'KiluaZoldyc','patatobeur','Sam11360','elo062','hermeline','Biciclet'];

$("#check").click( function(){

  if(boucler){
    for (var i = 0; i < members.length; i++) {
      switch(members[i]) {
          case "anneserrano":
              var divcheck = document.getElementById("check");

              divcheck.innerHTML += "<p> C'est donc vous "+ members[i] + "</p>"
              console.log("affiche"+" "+ members[i]);
              break;

          default:

          var divcheck = document.getElementById("check");

          divcheck.innerHTML += "<p>" + members[i] + "</p>"
          console.log(members[i]);
      }
    }
  }
});
