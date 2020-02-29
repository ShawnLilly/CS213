<html>
  <head>
    <title>Week 11 : Problem 5</title>
  </head>
    <body>
     <p>
       <?php 
         $numX = $_POST["x"];
         $numN = $_POST["n"];
         
         echo " N X"; // organization
         echo "<Br>"; // same
         for($i=1; $i<=$numX; $i++) // display all the num up to x and calclate the powers
         {
           echo "" . $i . " "; 
           echo pow($numN, $i);       
           echo "<br>";
         }
       ?>
     </p>
    </body>
</html>