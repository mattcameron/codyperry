
function calcStops(start, end) {
	if (lineOn === lineOff) {
		var noOfStops = Math.abs(lineOn.indexOf(end) - lineOn.indexOf(start));
		return noOfStops;
	}
	var toRichmond = Math.abs(lineOn.indexOf("Richmond") - lineOn.indexOf(start));
	var fromRichmond = Math.abs(lineOff.indexOf(end) - lineOff.indexOf("Richmond"));
	return toRichmond + " + " + fromRichmond + " = " + (toRichmond + fromRichmond);
}

function convertLineInput(line) {
	if (line === "Sandringham") {
		return sandringham;
	} else if (line === "Alamein") {
		return alamein;
	} else if (line === "Glen Waverly") {
		return glenWaverly;
	} else {
		return "ERROR!"
	}
}

function getStops(start, end) {
		var hopOnIndex = lineOn.indexOf(start);
		var hopOffIndex = lineOn.indexOf(end);
	if (lineOn === lineOff) {				// travelling on the same line
		if (hopOnIndex <= hopOffIndex) {
			var route = lineOn.slice(hopOnIndex+1, hopOffIndex+1); // add first 1 because station we get on at is not a stop, and second 1 because slice does not include last element you feed it.
		} else {
			var route = (lineOn.slice(hopOffIndex, hopOnIndex)).reverse();
		}
		return route;
	} else {					// travelling to a different line
		var changeAtRichmond = lineOn.indexOf("Richmond");
		var boardAtRichmond = lineOff.indexOf("Richmond");

	}
}

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];
var lineOn = "Sandringham";
var lineOff = "Sandringham"   // prompt("Which line are you getting off?");
var startStation = "Windsor"; // prompt("Which station are you getting on at?");
var endStation =  "Southern Cross";  // prompt("Which station are you getting off at?");

lineOn = convertLineInput(lineOn);
lineOff = convertLineInput(lineOff);

console.log("Travelling from " + startStation + " to " + endStation + " takes " + calcStops(startStation, endStation) + " stops.");
console.log("The stops are " + getStops(startStation, endStation));








/*
function checkLine(station) {
	var currentLine;
	  if (alamein.indexOf(station) !== -1) {
		currentLine = alamein;
	} else if (glenWaverly.indexOf(station) !== -1) {
		currentLine = glenWaverly;
	} else if (sandringham.indexOf(station) !== -1) {
		currentLine = sandringham;
	} else {
		currentLine = "That's not a real train line";
	}
	return currentLine;
}
*/