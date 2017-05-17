/*
 * Raine Padilla
 * Intro to JS Exercise
 * 5/17/2017
 */

// Add a statement to your file that prints "Introduction to JavaScript" to the console window
console.log("Introduction to JavaScript");

// Function test area
FizzBuzz();

console.log("Test CountBs function with BBbbBBBb. Expected result: 5");
console.log("CountBs result: " + CountBs("BBbbBBBb");


// Write a function that prints 'fizz' if a number is divisible by three,
// 'buzz' if it is divisible by 5, or 'fizzbuzz' if it's both.
function FizzBuzz()
{
	for(var i = 1; i <= 100; i++)
	{
		if(i % 3 === 0 && i % 5 === 0)
		{
			console.log("FizzBuzz");
		}
		else if(i % 3 === 0)
		{
			console.log("Fizz");
		}
		else if(i % 5 === 0)
		{
			console.log("Buzz");
		}
		else
		{
			console.log(i);
		}
	}
}

// Write function to count Bs in a given string
function CountBs(string)
{
	var count = 0;
	for(var i = 0; i < string.length; i++)
	{
		if(string.charAt(i) == "B")
		{
			count++;
		}
	}
	return count;
}

// Write a function to count a given character in a given string
function CountChar(string, character)
{
	var count = 0;
	for(var i = 0; i < string.length; i++)
	{
		if(string.charAt(i) == character)
		{
			count++;
		}
	}
	return count;
}