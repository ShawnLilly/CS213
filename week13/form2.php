<!DOCTYPE HTML>
<html>  
 <head> 
  <link rel="stylesheet" type="text/css" href="index.css"> 
  <script type="text/javascript" src="Week07.js"></script>
  <title>Confirm Purchase</title>
  <style>
  div#content {
      background-color: hsla(0, 0%, 47%, 0.70);
      padding:6px;
      width: 550px;
      font-size: 12;
	    border: 3px solid rgb(0, 90, 136); 
      border-radius: 4px;
      display:table; margin:0 auto; 
  }
  div#center {  
      display:table; margin:0 auto;
      padding-right: 280px;
      font-family:Verdana, Geneva, sans-serif; 
      font-size: 18px;
  }    
  h3 { 
      color: gold; 
      text-align: center; 
      font-style: italic;
  }      
  p {
      font-style: bold;  
  }
      div#center2 {
      padding-left:20px;
       color: gold;
  }
  </style>    
 </head>
   <body>
   <h1>Checkout</h1>
   <h3> Thank you for visiting our online store</h3>
      
      <div id="center">
      <?php
         $conf = $_POST["conf"];
         $conc = $_POST["conc"];
            if ($conf) {
              echo "Thank you for your purchase. <br> Here is your recept.";
              }
              else {
              echo "Your purchase was cancled.";
              } 
      ?>
      </div>
      <div id="content">
         <?php           
             echo "Name: ";
             echo $_POST["fName"]; 
             echo " ";
             echo $_POST["lName"];
                  
               echo "<br>"; //next line
                  
             echo "Address: ";
             echo $_POST["address"];;
             echo ", ";
             echo $_POST["state"];
             echo " ";
             echo $_POST["zip"];
                  
               echo "<br>"; //next line
                  
             echo "Phone Number: ";
             echo $_POST["phone"];
                   
               echo "<br>"; //next line
                  
             echo "<p></p>"; 
             echo "Purchased Items: ";                
         ?>
         
      <div id="center2">
         <?php                 
             //vriables and logic to get sales items
             $item1 = $_POST["saleItem1"];
             $item2 = $_POST["saleItem2"];
             $item3 = $_POST["saleItem3"];
                  
             $item = array("$item1", "$item2", "$item3");
                  
             $item1 = $_POST["saleItem1"];
             $item2 = $_POST["saleItem2"];
             $item3 = $_POST["saleItem3"];
                  
             $item = array("$item1", "$item2", "$item3");
             $prod = array("fads");
             
               echo "<br>"; //next line
               
                  for($i=0; $i<3; $i++){
                    if($item[$i] == 40000){
                        echo $prod[$i] = "Bolt";
                        echo " $" . $item[$i];
                        echo "<br>";
                     }
                     else if($item[$i] == 3000){
                        echo $prod[$i] = "P23 Injection Nanobots";
                        echo " $" . $item[$i];
                        echo "<br>";
                     }
                     else if($item[$i] == 20000) {
                        echo $prod[$i] = "High Power Solar Panels";
                        echo " $" . $item[$i];
                        echo "<br>";
                     } 
                     else {
                        echo "";
                     } 
                  }
         ?>
      </div> <!--center2-->
      <br> 
         <?php
             echo "Total: $";
             echo $_POST["total"]; 
                   
               echo "<br>"; //next line
                  
             echo "Payment type info: ";
             echo $_POST["card"]; 
             echo " ";
             echo $_POST["cardDate"];                                    
         ?>
      </div>
   </body>
</html>