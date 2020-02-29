<!DOCTYPE HTML>
<html>  
 <head> 
  <link rel="stylesheet" type="text/css" href="index.css"> 
  <script type="text/javascript" src="Week07.js"></script>
  <title>Review Purchase</title>
  <style>
  input {
    background-color: #C0C0C0; /* Green */
    border: none;
    color: Black;
    padding: 3px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2), 0 3px 15px 0 rgba(0,0,0,0.19);
  }

  div#content {
      background-color: hsla(0, 0%, 47%, 0.70);
      padding:6px; 
      width: 550px;
      font-size: 12;
	    border: 3px solid rgb(0, 90, 136); 
      border-radius: 4px;
      display:table; margin:0 auto; 
  }
  h3 { 
      color: gold; 
      text-align: center;
      font-style: italic;
  }      
  p {
      font-style: bold;  
  }
  div#center {
       padding-left:20px;
       color: gold;
  }
  div#dissap{
       position: absolute;
       display: none;
  }
  </style>    
 </head>
   <body>
   <h1>Finalize</h1>
   <h3>Just check over the info carfully and click confirm if it looks good </h3>
      <form action="form2.php" method="post">
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
             echo "Items to be Purchased: ";                
         ?>
         
      <div id="center">
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
                        echo $prod[$i] = "P23 Injection nanobots";
                        echo " $" . $item[$i];
                        echo "<br>";
                     }
                     else if($item[$i] == 20000) {
                        echo $prod[$i] = "High power solar panels";
                        echo " $" . $item[$i];
                        echo "<br>";
                     }
                     else {
                        echo "";
                     } 
                  }
         ?>
      </div> <!--center-->
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
         
                   <!--Buttons.-->
         <input name=conf type="submit" value="Confirm">
         <input name=canc type="submit" value="Cancel">
                   
                   <!--fills out another form so the form2.php file can be populated.-->
         <div id="dissap">
           <input name="fName" value=" <?php echo $_POST["fName"]; ?>" >
           <input name="lName" value=" <?php echo $_POST["lName"]; ?>" >
           <input name="address" value=" <?php echo $_POST["address"]; ?>" >
           <input name="state" value=" <?php echo $_POST["state"]; ?>" >
           <input name="zip" value=" <?php echo $_POST["zip"]; ?>" >
           <input name="phone" value=" <?php echo $_POST["phone"]; ?>" >
           <input name="saleItem1" value=" <?php echo $_POST["saleItem1"]; ?>" >
           <input name="saleItem2" value=" <?php echo $_POST["saleItem2"]; ?>" >
           <input name="saleItem3" value=" <?php echo $_POST["saleItem3"]; ?>" >
           <input name="total" value=" <?php echo $_POST["total"]; ?>" >
           <input name="card" value=" <?php echo $_POST["card"]; ?>" >
           <input name="cardDate" value=" <?php echo $_POST["cardDate"]; ?>" >
         </div>
         </form>
      </div>
   </body>
</html>