<?php
    $conn=new mysqli("localhost","root","","esami");
    $id = $_REQUEST["cont"];
    $string;
    $statoiniziale = array();
    $source=array("1","2","3","4","5","6","7","8","9");
    $random_keys=array_rand($source,8);
    for ($i=0; $i<(9*9); $i++) {
            $statoiniziale[$i+$j] = 0;
    }
    for($i=0; $i<8; $i++) {
        $statoiniziale[rand(0,9*9)] = $source[$random_keys[$i]];
    }
    $string = implode("",$statoiniziale);
    $sql="INSERT INTO `sudoku`(`id`, `statoiniziale`) VALUES ('".$id."', '".$string."')";
    $conn -> query($sql);
    echo json_encode($statoiniziale);
?>