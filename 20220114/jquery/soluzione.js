$(document).ready(function(){
  var num;
    for (let i = 0; i < 6; i++) {
        $("table").append("<tr>");
        for(let j = 0; j < 7; j++){
          num =Math.floor((Math.random()*2)+1);
          if(num==1){
            $("table").append("<td style='background: red'>"+num+"</td>");
          }else{
            $("table").append("<td style='background: blue'>"+num+"</td>");
          }

        }
        $("table").append("</tr>");
    }
  $(".copia").hide();
  console.log("Tabella creata");
    
  $("button").click(function(){
    $(".copia").show();
  });

  $("td").click(function(){
    $(this).css("background-color","gray");
    $(this).text("0");
  });

});
