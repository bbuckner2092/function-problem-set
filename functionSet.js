// Return if the function is even
function isEven(x) {
	if (x % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// Return the factorial, ex (3*2*1), of argument
// the code I found online
function factorial(x)
{
    var num=1;
    for (var i = 2; i <= x; i++)
        num = num * i;
    return num;
}

// Return kebabToSnake case
// the code I found online
function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
   
}