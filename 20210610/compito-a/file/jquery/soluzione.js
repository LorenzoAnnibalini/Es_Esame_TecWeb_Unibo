$(document).ready(function() {
    $("button").click(function(){
        array = read();
    });
});

async function read() {
    let resposne = await fetch("data.json");
    let array = await response.json();
    for(let i=0; i<array.length; i++){
        alert(array[i].nome);
        alert(array[i].id);
        alert(array[i].type);
    }
    return array;
}