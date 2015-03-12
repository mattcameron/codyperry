/*
Write a program that takes user input and creates a simple ASCII art pyramid using only one character:

Ask the user for a character
Ask the user for the number of rows in the pyramid
Print out a simple ASCII art pyramid
**Bonus **- Ask the user if they want their pyramid upside-down and print it the way that they want it.
*/

var setChar = prompt("Pick a character.");
var setRows = prompt("How many rows do you want?");
var count = 0;
var originalChar = setChar;

while(count < parseInt(setRows,10)) {
	if (count >= 1) {
		setChar = setChar + originalChar;
	}
	console.log(setChar);
	count++;
}



