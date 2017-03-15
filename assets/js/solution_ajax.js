// Mettre un evenement onclick sur l'id check présent dans index.html

$('#check').click(
  function(){
    $.ajax({
      url: "contenu.html"
    }).done(function(data) {
      console.log(data);
      $("#resultatAjax").html( data );
    });
  }
);
