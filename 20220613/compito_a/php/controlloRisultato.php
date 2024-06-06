<?php
    $riga=$_REQUEST["riga"];
    $colonna=$_REQUEST["colonna"];
    $valore=$_REQUEST["valore"];
    $id=$_REQUEST["id"];

    $cont=0;

    if($_COOKIE["id"]==$id) {
    
        $conn = new mysqli("localhost","root","","esami");

        $sql="SELECT `statoiniziale` FROM `sudoku` WHERE `id`=".$id;

        $result = $conn -> query($sql);

        if($result -> num_rows > 0) {
            $statoiniziale = str_split($result -> fetch_assoc()["statoiniziale"]);
            $statoiniziale[($riga*9)+$colonna] = $valore;
        }

        $statoiniziale[($riga*9)+$colonna] = $valore;

        $stringa=implode("",$statoiniziale);


        $sql="UPDATE `sudoku` SET `statoiniziale`=".$stringa." WHERE `id`=".$id;

        $conn -> query($sql);

        echo json_encode($statoiniziale);
    }

?>