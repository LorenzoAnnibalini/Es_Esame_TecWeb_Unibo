<?php
    if(isset($_COOKIE["id"])) {
        $conn=new mysqli("localhost","root","","esami");
        $id = $_COOKIE["id"];
        $riga=$_REQUEST["riga"];
        $colonna=$_REQUEST["colonna"];
        $valore=$_REQUEST["valore"];

        $nuovoArray=array();

        $sql="SELECT `statoiniziale` FROM `sudoku` WHERE `id`='".$id."'";
        $result = $conn -> query($sql);
        if ($result -> num_rows >0){
            for($i=0; $i<9*9; $i++){
                if($i==$riga*9+$colonna){
                    $nuovoArray[$i]=$valore;
                }else {
                    $nuovoArray[$i]=$result[$i];
                }
            }
            $string=implode("",$nuovoArray);
            $sql="UPDATE `sudoku` SET `statoiniziale`='".$string."' WHERE `id`='".$id."'";
            $conn -> query($sql);
            echo json_encode($nuovoArray);
        }
    }else {
        alert("ERRORE COOKIE");
    }
?>