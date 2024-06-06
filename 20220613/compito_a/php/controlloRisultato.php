<?php
    $riga=$_REQUEST["riga"];
    $colonna=$_REQUEST["colonna"];
    $valore=$_REQUEST["valore"];
    $id=$_REQUEST["id"];
    //if(isset($_COOKIE["id"]) && $_COOKIE["id"]==$id) {
        $conn=new mysqli("localhost","root","","esami");

        $nuovoArray=array();
        echo ("ok");
        echo($riga);
        echo($colonna);
        echo($valore);
        echo($id);
        echo("<br>");

        $sql="SELECT `statoiniziale` FROM `sudoku` WHERE `id`='".$id."'";
        $result = $conn -> query($sql);
        if ($result -> num_rows >0){
            for($i=0; $i<81; $i++){
                echo($i);
                if($i==(($riga*9)+$colonna)){
                    $nuovoArray[$i]=$valore;
                    echo("Valore");
                }else {
                    $nuovoArray[$i]=$result[$i];
                    echo("default");
                }
            }
            echo json_encode($nuovoArray);
            $string=implode("",$nuovoArray);
            $sql="UPDATE `sudoku` SET `statoiniziale`='".$string."' WHERE `id`='".$id."'";
            $conn -> query($sql);
            echo json_encode($nuovoArray);
        }
   // }else {
   //     alert("ERRORE COOKIE");
   // }
?>