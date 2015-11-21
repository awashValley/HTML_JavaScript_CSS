
var box = document.getElementById('display');			/* a variable to store a number. The 'document.getElementByID' is a pre-defined
															javascript method. It is used to access HTML element by using ID name. */

function addtoscreen(x)
{
	box.value += x;				/*	The '+=' sign is used to add new values without removing the old value. */

	/* to clear the display */
	if (x == 'c'){
		box.value = '';
	}
}

function answer()
{
	x = box.value;
	x = eval(x);			/*	The eval is pre-defined javascript method to evaluate the arguments. */
	box.value = x;
}

function backspace()
{
	var number = box.value;
	var len = number.length - 1;
	var newnumber = number.substring(0, len);
	box.value = newnumber;
}

function power(y)
{
	var x = box.value;
	x = Math.pow(x, y);
	box.value = x;
}