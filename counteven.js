var inputvalue = document.getElementById("inputvalue");
var outputspan = document.getElementById("outputspan");

function countDigits()
{
	var total = 0;
	var val = parseInt(inputvalue.value);
	while(val)
	{
		val%2 === 0 ? total++ : total;
		val = Math.floor(val/10);
	}
	outputspan.innerHTML = total;
}