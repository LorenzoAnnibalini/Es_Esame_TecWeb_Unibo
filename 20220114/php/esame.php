<?php
    $nome=$_GET['nome'];
    $cognome=$_GET['cognome'];
    //$data=_REQUIRE['data'];
    $sesso=$_REQUEST['sesso'];
    $codiceFiscale=$_GET['codiceFiscale'];
    //$id=_REQUIRE['id'];

        if(is_string($nome)){echo $nome;}
        if(is_string($cognome)){echo $cognome;}
        if(strlen($codiceFiscale)==16){echo "Codice Fiscale: ".$codiceFiscale;}
        if(strncmp($sesso,"M",2)==0 || strncmp($sesso,"F",2)==0 || strncmp($sesso,"A",2)==0){ echo $sesso;}
?>