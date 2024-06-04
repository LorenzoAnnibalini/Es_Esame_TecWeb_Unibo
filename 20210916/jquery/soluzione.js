$(document).ready(function(){
    $("main").prepend("<table id='numeri'><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr></table>");
      
        // Gestione click su celle del tabellone
        $(".tabellone td").click(function() {
          // Recupero cella cliccata e cella evidenziata
          const cellaCliccata = $(this);
          const cellaEvidenziata = $(".tabellone td.evidenziata");

          $(".tabellone td").css("background-color", "white");

          // Toggle classe "evidenziata" sulla cella cliccata
          cellaCliccata.toggleClass("evidenziata");
      
          // Se c'è una cella evidenziata, deselezionala
          if (cellaEvidenziata.length > 0) {
            cellaEvidenziata.removeClass("evidenziata");

          }else{
            $(this).css("background-color", "#cacaca");
          }
        });
      
        // Gestione click su celle della tabella "numeri"
        $("#numeri td").click(function() {
          // Recupero cella cliccata e cella evidenziata
          const cellaCliccata = $(this);
          const cellaEvidenziata = $(".tabellone td.evidenziata");
      
          // Se non c'è cella evidenziata, visualizza messaggio nel log
          if (cellaEvidenziata.length === 0) {
            $(".log").text("Cella non selezionata");
          } else {
            // Inserisci il numero nella cella evidenziata
            cellaEvidenziata.text(cellaCliccata.text());
            
            $(".log").text("Numero inserito correttamente");
            cellaEvidenziata.removeClass("evidenziata");
            cellaEvidenziata.css("background-color", "white");
          }
        });
});