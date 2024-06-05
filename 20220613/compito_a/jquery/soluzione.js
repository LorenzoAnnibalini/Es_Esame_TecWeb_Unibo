

$(Document).ready(function(){
    $("form").hide();
    $("span").hide();
    $("button:gt(0)").hide();


    $("button").click(function(){
        let response = fetch("../php/getId.php",{method: "GET"});
        alert(response);
        let id = response.json();
        alert(id);
        id++;
        response = fetch("../php/nuovaPartita.php?id="+id,{method: "GET"});
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