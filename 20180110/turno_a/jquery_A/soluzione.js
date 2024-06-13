$("document").ready(function(){

    $("button.insert").click(function(){
        const num = document.getElementsByName("insert");
        if(num < 10){
            $("table:nth-child(1)>tr:nth-child("+num+")").html("<td style='red'>"+num+"</td>");
        }
    });

});