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
            echo json_encode("ERRORE");
        }
    }else if($input == "new"){
        echo json_encode("Reset");
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
            echo json_encode("HAI VINTO");
        }else{
            echo json_encode("HAI PERSO");
        }
    }else{
        echo json_encode("ERRORE");
    }
?>