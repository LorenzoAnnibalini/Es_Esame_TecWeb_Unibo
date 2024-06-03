let a=0;
$(document).ready(function(){
    $("main").prepend("<table><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr></table>");

    $(".tabellone").css("background-color","white");
    
    $(".tabellone td").click(function(){
        
        if($(this).css("background-color")=="rgb(255, 255, 255)"){
            alert(a);
            if(a==1){
                alert(a);
                $(".tabellone").css("background-color","white");
                $(this).css("background-color","#cacaca");
            }else{
                $(this).css("background-color","#cacaca");
                a=1;
                alert(a);
            }
        }else{
            a=0;
            $(this).css("background-color","white");
        }

     });

});