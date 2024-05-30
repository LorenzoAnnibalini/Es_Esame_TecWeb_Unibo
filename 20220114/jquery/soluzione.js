$(document).ready(function(){
    for (let i = 0; i < 6; i++) {
        $("table").append("<tr>");
        for(let j = 0; j < 7; j++){
            $("table").append("<td>");
            $("table").append(Math.floor((Math.random()*2)+1));
            $("table").append("</td>");
        }
        $("table").append("</tr>");
    }
    $(".copia").hide();
    console.log("Tabella creata");
    $("button").click(function(){
      $(".copia").show();
    });
  });
  //