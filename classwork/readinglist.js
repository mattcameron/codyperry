/*
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

var bookshelf = [
								{title: "The 4-Hour Work Week",
									author: "Tim Ferriss",
									alreadyRead: true},
								{title: "The Name of the Wind",
									author: "Patrick Rothfuss",
									alreadyRead: true},
								{title: "A Clockwork Orange",
									author: "Anthony Burgess",
									alreadyRead: true},
								{title: "The Lies of Locke Lamora",
									author: "Scott Lynch",
									alreadyRead: false}
								]

for(var i = 0; i < bookshelf.length; i++) {
	if (bookshelf[i].alreadyRead) {
	console.log("You already read " + bookshelf[i].title + " by " + bookshelf[i].author);
	} else {
		console.log("You still need to read " + bookshelf[i].title + " by " + bookshelf[i].author);
	}
}