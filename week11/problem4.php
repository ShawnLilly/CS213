<html>
  <head>
    <title>Week 11 : Problem 4</title>
  </head>
    <body>
       <?php
          $engNum = array("one"=>"uno", "two"=>"dos", "three"=>"tres", "four"=>"cautro", "five"=>"cinco", "six"=>"seis", "seven"=>"siete","eight"=>"ocho", "nine"=>"nueve", "ten"=>"diez", "eleven"=>"once", "twelve"=>"doce", "thirteen"=>"trece", "fourteen"=>"catorce", "fifteen"=>"quince", "sixteen"=>"dieciseis","seventeen"=>"diecisiete","eighteen"=>"dieciocho","nineteen"=>"diecinueve","twenty"=>"veinte");
          
      $num = $_POST["input4"];
      $i=0;
      foreach($engNum as $x => $x_value)  
      {
        if($num == $x)
        {
          echo $x_value;
          break;
        }
        else if($num != $x)
        {
          $i++;
        }
      }
      if($i == 20)
      {
         echo "The English cardinal ";
         echo $_POST["input4"];
         echo " is not between \"one\" and \"twenty\"";
      }

  
        ?>
    </body>
</html>