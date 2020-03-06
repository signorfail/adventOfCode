/* Advent of Code 2015 Challenge Day 1 https://adventofcode.com/2015/day/1
Requires Node.js to run fs module, details here https://nodejs.org/api/fs.html
Q1 - What floor does Santa end up on?
Q2 - When does Santa enter the basement
Parameters - '(' = go up 1 floor, ')' = go down 1 floor */

const fs = require ('fs');

function question1() {
	fs.readFile('./santaDay1.txt', (err, data) => {
		const directions = data.toString();
		const directionsArray = directions.split('');
		const answer = directionsArray.reduce((accumulator, currentValue) => {
			if (currentValue === '(') {
				return accumulator +=1
			} else if (currentValue === ')') {
				return accumulator -=1
			}
		}, 0)
		console.log('answer1', answer);
	});
}
question1();

function question2() {
	fs.readFile('./santaDay1.txt', (err, data) => {
		const directions = data.toString();
		const directionsArray = directions.split('');
		let accumulator = 0
		let counter = 0
		const answer = directionsArray.some((currentValue) => {
			if (currentValue === '(') {
				accumulator +=1
			} else if (currentValue === ')') {
				accumulator -=1
			}
			counter ++
			return accumulator <0;
		})
		console.log('answer2', counter);
	});
}

question2();

// Needs some refactoring