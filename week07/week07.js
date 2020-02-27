
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
// First problem: Age 

// Second problem: SSN 
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

// Third problem: Credit Card Number
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

function validateZip(theZip, theClass)
{
	var zipTest = /^\s*\d{6}\s*$/;

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
// Fourth problem: Date
function validateDate(theDate, theClass)
{
	                //1-12                   2017-2021                        
	var dateTest = /^\s*([1-9]|1[0-2])\/(201[7-9]|202[01])\s*$/;
	var dateTest2 = /[A-Za-z]/;
					//1-9                   0-2017   
	var dateTest3 = /^\s*([1-9])\/([0-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|1[0-9]{3}|200[0-9]|201[0-7])/;

	if(dateTest.test(theDate) == true && dateTest2.test(theDate) == false && 
		theDate.length != 0 && dateTest3.test(theDate) == false)
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

// Fifth problem: Abbreviation
function validateStateId(theId, theClass)
{             
	var stateTest1 = /[a-z]/;
	var state1 = /^\s*\A\L\s*$/; var state2 = /^\s*\A\K\s*$/; var state3 = /^\s*\A\Z\s*$/; var state4 = /^\s*\A\R\s*$/;
	var state5 = /^\s*\C\A\s*$/; var state6 = /^\s*\C\O\s*$/; var state7 = /^\s*\C\T\s*$/; var state8 = /^\s*\D\E\s*$/;
	var state9 = /^\s*\F\L\s*$/; var state10 = /^\s*\G\A\s*$/; var state11 = /^\s*\H\I\s*$/; var state12 = /^\s*\I\D\s*$/;
	var state13 = /^\s*\I\L\s*$/; var state14 = /^\s*\I\N\s*$/; var state15 = /^\s*\I\A\s*$/; var state16 = /^\s*\K\S\s*$/;
 	var state17 = /^\s*\K\Y\s*$/; var state18 = /^\s*\L\A\s*$/; var state19 = /^\s*\M\E\s*$/; var state20 = /^\s*\M\D\s*$/;
	var state21 = /^\s*\M\A\s*$/; var state22 = /^\s*\M\I\s*$/; var state23 = /^\s*\M\N\s*$/; var state24 = /^\s*\M\S\s*$/;
	var state25 = /^\s*\M\O\s*$/; var state26 = /^\s*\M\T\s*$/; var state27 = /^\s*\N\E\s*$/; var state28 = /^\s*\N\V\s*$/;
	var state29 = /^\s*\N\H\s*$/; var state30 = /^\s*\N\J\s*$/; var state31 = /^\s*\N\M\s*$/; var state32 = /^\s*\N\Y\s*$/;
	var state33 = /^\s*\N\C\s*$/; var state34 = /^\s*\N\D\s*$/; var state35 = /^\s*\O\H\s*$/; var state36 = /^\s*\O\K\s*$/;
	var state37 = /^\s*\O\R\s*$/; var state38 = /^\s*\P\A\s*$/; var state39 = /^\s*\R\I\s*$/; var state40 = /^\s*\S\C\s*$/;
	var state41 = /^\s*\S\D\s*$/; var state42 = /^\s*\T\N\s*$/; var state43 = /^\s*\T\X\s*$/; var state44 = /^\s*\T\U\s*$/;
	var state45 = /^\s*\T\V\s*$/; var state46 = /^\s*\V\A\s*$/; var state47 = /^\s*\W\A\s*$/; var state48 = /^\s*\W\V\s*$/;
 	var state49 = /^\s*\W\I\s*$/; var state50 = /^\s*\W\Y\s*$/;
		
	 if ( (state1.test(theId) == true || state2.test(theId) == true || state3.test(theId) == true || 
	   	   state4.test(theId) == true || state5.test(theId) == true || state6.test(theId) == true ||
	   	   state7.test(theId) == true || state8.test(theId) == true || state9.test(theId) == true || 
	   	   state1.test(theId) == true || state1.test(theId) == true || state1.test(theId) == true || 
	   	   state10.test(theId) == true || state11.test(theId) == true || state12.test(theId) == true || 
	   	   state13.test(theId) == true || state14.test(theId) == true || state15.test(theId) == true || 
	   	   state16.test(theId) == true || state17.test(theId) == true || state18.test(theId) == true || 
	   	   state19.test(theId) == true || state20.test(theId) == true || state21.test(theId) == true || 
	   	   state22.test(theId) == true || state23.test(theId) == true || state24.test(theId) == true ||
	   	   state25.test(theId) == true || state26.test(theId) == true || state27.test(theId) == true ||
	   	   state28.test(theId) == true || state29.test(theId) == true || state30.test(theId) == true ||
	   	   state31.test(theId) == true || state32.test(theId) == true || state33.test(theId) == true ||
	   	   state34.test(theId) == true || state35.test(theId) == true || state36.test(theId) == true ||
	   	   state37.test(theId) == true || state38.test(theId) == true || state39.test(theId) == true ||
	   	   state40.test(theId) == true || state41.test(theId) == true || state42.test(theId) == true ||
	   	   state43.test(theId) == true || state44.test(theId) == true || state45.test(theId) == true ||
	   	   state46.test(theId) == true || state47.test(theId) == true || state48.test(theId) == true ||
	   	   state49.test(theId) == true || state50.test(theId) == true) && stateTest1.test(theId) == false && theId.length != 0)
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
		//console.log("10");
		}
	else
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
		//console.log("11");
		}
}

//Sixth problem: Money
function validateMoney(theMoney, theClass)
{                     
	var moneyTest = /[A-Za-z]/;
	var moneyTest5 = /^\s*\$*\d+(\.\d{2})*\s*$/;
	var moneyTest6 = /^\s*\$*\d{1,3}(\,\d{3})+(\.\d{2})*\s*$/
	if(moneyTest.test(theMoney) == false && theMoney.length != 0 &&
	  (moneyTest5.test(theMoney) == true || moneyTest6.test(theMoney) == true))
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
		console.log("12");
		}
	else
		{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
		console.log("13");
		}
}

function myFunction() {
    alert("action applied page refresh");
}