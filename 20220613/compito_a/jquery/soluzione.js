$(Document).ready(function(){
    $("form").hide();
    $("span").hide();
    $("button:gt(0)").hide();


    $("button").click(function(){
        getNuovaPartita();
    });

    $("form").submit(function(){
        const riga = document.getElementById("riga").value;
        const colonna = document.getElementById("colonna").value;
        const valore = document.getElementById("valore").value;

        alert(riga+" "+colonna+" "+valore);

        let cont=0;
        if(riga>=0 && riga<9 && colonna>=0 && colonna<9 && valore>0 && valore<10){
            alert("sto per entrare in aggiungi");
            aggiungi(riga, colonna, valore);
        }
        
    });

});

async function aggiungi(riga, colonna, valore){
    alert("inizio");
    const responseId = await fetch("../php/getId.php",{method: "GET"});
    const id = await responseId.json();
    alert(id.length);
    let num=id.length;
    alert("modifica id:"+num);
    const response = await fetch("../php/controlloRisultato.php?riga="+riga+"&colonna="+colonna+"&valore="+valore+"&id="+num,{method: "GET"});
    const result = await response.json();
    let cont=0;
    $("table").empty();
    for(let i=0; i<9; i++){
        $("table").append("<tr>");
        for(let j=0; j<9; j++){
            $("table").append("<td>"+nuovoArray[cont]+"</td>");
            cont++;
        }
        $("table").append("</tr>");
    }
}


async function getNuovaPartita(){
    let num;
    const responseId = await fetch("../php/getId.php",{method: "GET"});
    const id = await responseId.json();
    alert(id.length);
    num=id.length;
    num++;
    const responseArray = await fetch("../php/nuovaPartita.php?id="+num,{method: "GET"});
    const array = await responseArray.json();
    let cont=0;
    for(let i=0; i<9; i++){
        $("table").append("<tr>");
        for(let j=0; j<9; j++){
            $("table").append("<td>"+array[cont]+"</td>");
            cont++;
        }
        $("table").append("</tr>");
    }
    $("form").show();
}