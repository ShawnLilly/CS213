<html>
  <head>
    <title>Week 11 : Problem 6</title>
  </head>
    <body>
     <p>
       <?php 
          $listOrig = $_POST["input6"];
          $listSort = explode(", ",$listOrig);
          
          sort($listSort);
          $num = count($listSort);
            for ($i=0; $i<$num; $i++)
            {
                echo $listSort[$i];
                echo "<br>";
            }      
       ?>
     </p>
    </body>
</html>