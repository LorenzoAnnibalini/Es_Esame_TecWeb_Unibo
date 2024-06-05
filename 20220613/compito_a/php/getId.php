<?php
    $conn=new mysqli("localhost","root","","esami");
    $sql="SELECT `id` FROM `sudoku`";
    $conn -> query($sql);
    echo json_encode($statoiniziale);
?>