<?php
    $chiave=$_REQUEST["chiave"];
    $valore=$_REQUEST["valore"];
    $metodo=$_REQUEST["metodo"];
    $stop=false;

    if($metodo=="cookie" || $metodo=="db"){
        if($metodo=="cookie"){
            setcookie($chiave,$valore, time()+(86400));
        }else{
            $conn=new mysqli("localhost","root","","febbraio");
            $sql="SELECT * FROM dati";
            $result=$conn->query($sql);
            if($result->num_rows>0){
                while($row = $result->fetch_assoc()){
                    if($chiave==$row["chiave"]){
                        $stop=true;
                    }
                    $id=$row["id"];
                }
            }
            if($stop){
                echo ("Errore");
            }else{
                $id++;
                $sql="INSERT INTO `dati`(`id`, `chiave`, `valore`) VALUES ('".$id."','".$chiave."','".$valore."')";
                $conn->query($sql);
            }
        }
    }else{
        echo ("Errore");
    }
?>