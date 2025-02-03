import fizzBuzz from '../src/fizzBuzz';

describe('FizzBuzz computeOutput function', () => {
	const { computeOutput } = fizzBuzz();

	it('Should return Fizz when number can be divided by 3', async () => {
		const numbersTocheck = [3, 6, 9, '12', 24];
		numbersTocheck.forEach((numberToCheck) => {
			const output = computeOutput(numberToCheck);
			expect(output).toBe('Fizz');
		});
	});
	it('Should return Buzz when number can be divided by 5', async () => {
		const numbersTocheck = [5, 10, 20, '200000', 4000];
		numbersTocheck.forEach((numberToCheck) => {
			const output = computeOutput(numberToCheck);
			expect(output).toBe('Buzz');
		});
	});
	it('Should return FizzBuzz when number can be divided by 3 AND 5', async () => {
		const numbersTocheck = [15, 30, 60, '150', 3000];
		numbersTocheck.forEach((numberToCheck) => {
			const output = computeOutput(numberToCheck);
			expect(output).toBe('FizzBuzz');
		});
	});
	it('Should return user number', async () => {
		const numbersTocheck = [1, 2, 4, '7', 3274];
		numbersTocheck.forEach((numberToCheck) => {
			const output = computeOutput(numberToCheck);
			expect(output).toBe(String(numberToCheck));
		});
	});
});

describe('FizzBuzz lib checkNumber function', () => {
	const { checkNumber } = fizzBuzz();

	it('Should return an object with a specific error message when user input is empty', async () => {
		const userInput = '';
		const result = checkNumber(userInput);
		expect(result.hasError).toBe(true);
        expect(result.error).toBe("Your answer is empty.");
        expect(result.result).toBe(false);
	});
	it('Should return an object with a specific error message when user input is not a number', async () => {
		const userInput = 'a';
		const result = checkNumber(userInput);
		expect(result.hasError).toBe(true);
        expect(result.error).toBe(`${userInput} is not a number.`);
        expect(result.result).toBe(false);
	});
	it('Should return an object with a specific error message when user input is not a positive', async () => {
        const userInput = '-8';
		const result = checkNumber(userInput);
		expect(result.hasError).toBe(true);
        expect(result.error).toBe(`${userInput} is not a positive number.`);
        expect(result.result).toBe(false);
	});
	it('Should return an object with result set to true, hasError set to false and error : ""', async () => {
        const userInput = '5';
		const result = checkNumber(userInput);
		expect(result.hasError).toBe(false);
        expect(result.error).toBe("");
        expect(result.result).toBe(true);
	});
});
