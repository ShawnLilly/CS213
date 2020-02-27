function problem1()
{
 console.log("Hello World")
}


function problem2(newName,oldName)
{
 newName = oldName.replace(/RICH_GUY/g, newName);
 console.log(newName);
}


function problem3(fahrenheit)
{
    var celsious = (fahrenheit - 32) / (9/5);
    console.log(celsious.toFixed(1));
}


function problem4(weight)
{
	var cost = 0
	if (weight > 5 || weight < 1 )
	{
		console.log("invalid weight");
	}
	else if (weight == 1)
	{
		cost = .98;
		console.log("$" + cost.toFixed(2))
	}
	else if (weight == 2)
	{
		cost = 1.19;
		console.log("$" + cost.toFixed(2))
	}
	else if (weight == 3)
	{
		cost = 1.40;
		console.log("$" + cost.toFixed(2))
	}
	else if(weight == 4)
	{
		cost = 1.61;
		console.log("$" + cost.toFixed(2))
	}
	else if(weight == 5)
	{
		cost = 1.82;
		console.log("$" + cost.toFixed(2))
	}
}

function problem5(apr,term,amount)
{
	apr = parseFloat(apr);
	term = parseFloat(term);
	amount = parseFloat(amount);

	var firstYearGain = 0;
	var compoundI= 0;

	for (var i = 1; i <= term; i++) 
	{
		firstYearGain = amount / 100 * apr;
		amount = firstYearGain + amount; 
	}
	console.log(amount.toFixed(2));
}