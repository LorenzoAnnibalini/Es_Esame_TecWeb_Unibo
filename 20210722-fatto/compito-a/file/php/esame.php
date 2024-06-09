<?php
    $input = $_REQUEST["action"];
    $conn = new mysqli("localhost","root","","lotto");

    if($input == "extract"){
        $sql = "SELECT * FROM estrazione";
        $result = $conn->query($sql);
        $rows = array();
        while($row = $result->fetch_assoc()){
            $rows[] = $row;
        }
        if(sizeof($rows) < 5){
            $num = rand(1,90);
            $sql = "INSERT INTO `estrazione`(`id`, `numero`) VALUES ('".(sizeof($rows)+1)."','".$num."')";
            $conn->query($sql);
        }else{
            echo ("<input type='text' id='input' value='".json_encode("ERRORE")."' disabled>");
        }
    }else if($input == "new"){
        echo ("<input type='text' id='input' value='".json_encode("Reset")."' disabled>");
        $sql = "DELETE  FROM estrazione";
        $conn->query($sql);
    }else if ($input == "check"){
        $sequence=$_REQUEST["sequence"];
        $sql = "SELECT * FROM estrazione";
        $result = $conn->query($sql);
        $rows = array();
        while($row = $result->fetch_assoc()){
            $rows[] = $row;
        }
        $arraySequence = array();
        $arraySequence = explode("-",$sequence);
        $win = 0;
        for($i=0;$i<sizeof($arraySequence);$i++){
            if($arraySequence[$i] == $rows[$i]["numero"]){
                $win++;
            }
        }
        if($win == 5){
            echo ("<input type='text' id='input' value='".json_encode("HAI VINTO")."' disabled>");
        }else{
            echo ("<input type='text' id='input' value='".json_encode("HAI PERSO")."' disabled>");
        }
    }else{
        echo ("<input type='text' id='input' value='".json_encode("ERRORE")."' disabled>");
    }
?>