

$(Document).ready(function(){
    $("form").hide();
    $("span").hide();
    $("button:gt(0)").hide();


    $("button").click(function(){
        let id=getId();
        getNuovaPartita(id);
    });

    $("Aggiugi").click(function(){
        const riga = document.getElementById("riga").value;
        const colonna = document.getElementById("colonna").value;
        const valore = document.getElementById("valore").value;
        let response = fetch("../php/nuovaPartita.php",{method: "GET"});
        let valoreFinale=String();
        if(riga > 0 && riga <10 && colonna > 0 && colonna < 10 && valore > 0 && valore < 10){
            let array= response.json();
            console.log(array);
            for(let i=0; i<array.lenght; i++){
                $("table").pend("<tr>");
                let cells=array[i];
                for(let j=0; j<cells.lenght; j++){
                    if(j==colonna && i==riga){
                        $("table").pend("<td>"+valore+"</td>");
                        valoreFinale.push(valore);
                    }else{
                        $("table").pend("<td>"+cells[j]+"</td>");
                        valoreFinale.push(cells[j]);
                    }
                }
                $("table").pend("</tr>");
            }
            let response = fetch("../php/controlloRisultato.php?ris="+valoreFinale,{method: "GET"});
        }else{
            alert ("Errore");
        }

    });

});

async function getId(){
    let num;
    const response = await fetch("../php/getId.php",{method: "GET"});
    const id = await response.json();
    alert(id.length);
    num=id.length;
    num++;
    return num;
}

async function getNuovaPartita(id){
    response = await fetch("../php/nuovaPartita.php?id="+id,{method: "GET"});
    const array = await response.json();
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