<?php
    if(isset($_COOKIE["id"])) {
        $conn=new mysqli("localhost","root","","esami");
    }else {
        alert("ERRORE COOKIE");
    }
?>