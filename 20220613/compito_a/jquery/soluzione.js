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
    console.log(array);
    for(let i=0; i<array.lenght; i++){
        $("table").pend("<tr>");
        let cells=array[i];
        for(let j=0; j<cells.lenght; j++){
            $("table").pend("<td>"+cells[j]+"</td>");
        }
        $("table").pend("</tr>");
    }
    $("form").show();
    document.getElementById("form").reset();
});