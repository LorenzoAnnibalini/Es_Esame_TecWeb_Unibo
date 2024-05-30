var cont=0;

$(Document).ready(function(){
    $("form").hide();
    $("span").hide();
    $("button:gt(0)").hide();
});

$("button").click(function(){
    cont++;
    let response = fetch("../php/compito_a.php?cont="+cont,{method: "GET"});
    let array= response.json();
    return array;
});