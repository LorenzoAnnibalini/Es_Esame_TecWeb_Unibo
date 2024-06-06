$(Document).ready(function(){
    $("form").hide();
    $("span").hide();
    $("button:gt(0)").hide();


    $("button").click(function(){
        getNuovaPartita();
    });

    $("Aggiugi").click(function(){
        const riga = document.getElementById("riga").value;
        const colonna = document.getElementById("colonna").value;
        const valore = document.getElementById("valore").value;

        let cont=0;
        if(riga>=0 && riga<9 && colonna>=0 && colonnca<9 && valore>0 && valore<10){
            const nuovoArray = aggiungi(riga, colonna, valore);
            $("table").empty();
            $("table").append("<tr>");
            for(let j=0; j<9; j++){
                $("table").append("<td>"+nuovoArray[cont]+"</td>");
                cont++;
            }
            $("table").append("</tr>");
        }
        
    });

});

async function aggiungi(riga, colonna, valore){
    const responseId = await fetch("../php/getId.php",{method: "GET"});
    const id = await responseId.json();
    const num=id.length;
    alert(id);
    const response = await fetch("../php/controlloRisultato.php?riga="+riga+"&colonna="+colonna+"&valore="+valore+"&id="+num,{method: "GET"});
    const result = await responde.json();
    return result;
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
    document.getElementById("form").reset();
}