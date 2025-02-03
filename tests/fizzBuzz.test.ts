import fizzBuzz from '../src/fizzBuzz';

describe('FizzBuzz lib', () => {
	const { computeOutput } = fizzBuzz();

	it('Should return Fizz when number can be divided by 3', async () => {
		const numbersTocheck = [3, 6, 9, '12', 24];
		numbersTocheck.forEach((numberToCheck) => {
			const output = computeOutput(numberToCheck);
			expect(output).toBe("Fizz");
		});
	});
	it('Should return Buzz when number can be divided by 5', async () => {
		const numbersTocheck = [5, 10, 20, '200000', 4000];
		numbersTocheck.forEach((numberToCheck) => {
			const output = computeOutput(numberToCheck);
			expect(output).toBe("Buzz");
		});
	});
	it('Should return FizzBuzz when number can be divided by 3 AND 5', async () => {
		const numbersTocheck = [15, 30, 60, '150', 3000];
		numbersTocheck.forEach((numberToCheck) => {
			const output = computeOutput(numberToCheck);
			expect(output).toBe("FizzBuzz");
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
