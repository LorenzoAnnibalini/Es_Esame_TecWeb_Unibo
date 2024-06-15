<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Impiccato</title>
  </head>
  <body>
    <form action="index.php" method="post">
      <label>Lettera</label>
      <input type="text" name="lettera" id="lettera">
      <br>
      <input type="submit" value="submit">
    </form>
    <div>
    </div>
  </body>
</html>
<?php
  $conn= new mysqli("localhost","root","","impiccato");
  echo("php");
  if($_SERVER("REQUEST_METHOD")=="POST"){
    echo("post");
    if(empty($_POST["lettera"])){
      echo ("ERRORE");
    }else{
      echo("ok2");
      if($_SESSION["parola"] == NULL){
        $_SESSION["parola"]= rand(1,5);
        echo ($_SESSION["parola"]);
      }
      $sql="SELECT `parola` FROM `parola` WHERE `parola_id` =".$_SESSION["parola"];
      $conn->query($sql);
      echo ($result->fetch_assoc());
    }
  }else{
    echo ("ERRORE");
  }
?>