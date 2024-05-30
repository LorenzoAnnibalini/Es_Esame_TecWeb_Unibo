<?php
    $id = $_REQUEST["cont"];
    $statoiniziale = array();
    $source=array("1","2","3","4","5","6","7","8","9");
    $random_keys=array_rand($source,8);
    for ($i=0; $i<9; $i++) {
        for ($j=0; $j<9; $j++) {
            $statoiniziale[$i][$j] = 0;
        }
    }
    for($i=1; $i<9; $i++) {
        $statoiniziale[rand(0,8)][rand(0,8)] = $random_keys[$i];
    }
    $sql="INSERT INTO 'sudoku' ('id', 'statoiniziale') VALUES ('".$id."', '".$statoiniziale."')";
    $conn->query($sql);
    echo json_encode($statoiniziale);
?>