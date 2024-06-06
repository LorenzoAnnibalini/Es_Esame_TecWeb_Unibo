<?php
    $id=array();
    $conn=new mysqli("localhost","root","","esami");
    $sql="SELECT `id` FROM `sudoku`";
    $result = $conn -> query($sql);
    if ($result -> num_rows > 0) {
        while($row=$result -> fetch_assoc()) {
            $id[]=$row["id"];
        }
    } 
    echo json_encode($id);
?>