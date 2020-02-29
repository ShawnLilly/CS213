
function validateName(theName, theClass)
{
	var nameTest = /\w+/;

	if(theName.length != 0 && nameTest.test(theName) == true)
	{
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
		//console.log("1");
	}
	else
	{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
		//console.log("2");
	}
}

// Pin 
function validatePN(thePN, theClass)
{
	var PNTest = /^\s*\d{3}-\d{3}-\d{4}\s*$/;
	var PNTest3 = /[A-Za-z]/

	if(PNTest.test(thePN) == true && PNTest3.test(thePN) == false && thePN.length != 0)
	{
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
		//console.log("3");
	}
	else
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
		//console.log("4");
	}
}

//Credit Card Number
function validateCC(theCC, theClass)
{
	var CCTest = /^\s*\d{4}\ \d{4}\ \d{4}\ \d{4}\s*$/;
	var CCTest2 = /^\s*\d{16}\s*$/;
	var CCTest3 = /[A-Za-z]/;

	if((CCTest.test(theCC) == true || CCTest2.test(theCC) == true) &&
	 CCTest3.test(theCC) == false && theCC.length != 0)
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
		//console.log("5");
		}
	else
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
		//console.log("6");
		}
}

//Zip
function validateZip(theZip, theClass)
{
	var zipTest = /^\s*\d{5}\s*$/;

	if(theZip.length != 0 && zipTest.test(theZip) == true)
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
		//console.log("1");
		}
	else
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
		//console.log("2");
		}
}

// Date
function validateDate(theDate, theClass)
{
	                //1-12                1753-2100                        
	var dateTest = /^\s*([1-9]|1[0-2])\/(201[7-9]|2020)\s*$/;
	var dateTest2 = /[A-Za-z]/;

	if(dateTest.test(theDate) == true && dateTest2.test(theDate) == false && 
		theDate.length != 0)
	{
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
		//console.log("7");
	}
	else
	{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
		//console.log("8");
	}
}


// Abbreviation
function validateStateId(theId, theClass)
{
	stateTest=/^\s*(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)\s*$/;
	if(theId == "")
	{
 	    document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
	else if(stateTest.test(theId))
	{
	    document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	} 
	else
	{
	    document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

// checks if any values aren't filed
function CheckFunction(name,nameL,addr,id,zip,PN,CC,date) {
	//set all values to visible so error shows up if not input correct
	document.getElementsByClassName(nameL)[0].style.visibility == 'visible' 
    document.getElementsByClassName(addr)[0].style.visibility == 'visible' 
    document.getElementsByClassName(id)[0].style.visibility == 'visible' 
    document.getElementsByClassName(zip)[0].style.visibility == 'visible' 
    document.getElementsByClassName(PN)[0].style.visibility == 'visible' 
    document.getElementsByClassName(CC)[0].style.visibility == 'visible' 
    document.getElementsByClassName(date)[0].style.visibility == 'visible'

    // check if there are any vissible error messages. if ynot send to review
    if (document.getElementsByClassName(name)[0].style.visibility == 'hidden' &&  
    	document.getElementsByClassName(nameL)[0].style.visibility == 'hidden' &&
    	document.getElementsByClassName(addr)[0].style.visibility == 'hidden' &&
    	document.getElementsByClassName(id)[0].style.visibility == 'hidden' &&
    	document.getElementsByClassName(zip)[0].style.visibility == 'hidden' &&
    	document.getElementsByClassName(PN)[0].style.visibility == 'hidden' &&
    	document.getElementsByClassName(CC)[0].style.visibility == 'hidden' &&
    	document.getElementsByClassName(date)[0].style.visibility == 'hidden'&&
    	document.getElementById("PicExtPrice").value != 0)
    {
    	alert("Review Purchase");

    }
    else
    {
    	alert("MISSING INFO: If all feilds are properly filled, you may have forgotten to pick a product.");
    	return false;
    }
}

function myFunction2() {
    alert("Refreshing form.");
    window.location.reload();
}

function calcPrice() {
    var elt = document.getElementById("saleItem1");
    var sale1 = elt.options[elt.selectedIndex].value;
    elt = document.getElementById("saleItem2");
    var sale2 = elt.options[elt.selectedIndex].value;
    elt = document.getElementById("saleItem3");
    var sale3 = elt.options[elt.selectedIndex].value;
    cost1 = parseInt(sale1);
    cost2 = parseInt(sale2);
    cost3 = parseInt(sale3);
      
    var total = cost1+cost2+cost3; 
    document.getElementById("PicExtPrice").value=total;
}

// added for the onload attribute, and sets my price to 0 
function infoFunction(){
	alert("Due to demand you are only alowed to buy 3 items.");
	document.getElementById("PicExtPrice").value=0;

}

// credit card 
function card() {
    var elt = document.getElementById("card");
    var value = elt.options[elt.selectedIndex].value;
      
    document.getElementById("card").value=value;
}
