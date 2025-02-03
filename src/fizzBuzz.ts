type CheckUserInputResponse = {
	hasError: boolean;
	error: string;
	result: boolean;
};

export default function fizzBuzz() {
	function checkNumber(userInput: string | number): CheckUserInputResponse {
		const response: CheckUserInputResponse = {
			hasError: false,
			error: '',
			result: true,
		};
		if (!userInput || userInput === '') {
			return { hasError: true, result: false, error: 'Your answer is empty.' };
		}
		if (isNaN(Number(userInput))) {
			return {
				hasError: true,
				result: false,
				error: `${userInput} is not a number.`,
			};
		}
		if (Number(userInput) < 1) {
			return {
				hasError: true,
				result: false,
				error: `${userInput} is not a positive number.`,
			};
		}
		return response;
	}

	function isDivisible(number: number, dividers: number[]): boolean {
		let result = true;
		dividers.forEach((divider) => {
			if (number % divider !== 0) {
				result = false;
			}
		});
		return result;
	}

	function computeOutput(userNumber: string | number): string {
		// - if number can be divided by 3 **AND** 5 : display **FizzBuzz** ;
		if (isDivisible(Number(userNumber), [3, 5])) {
			return 'FizzBuzz';
		}
		// - if number can be divided by 3: display **Fizz** ;
		if (isDivisible(Number(userNumber), [3])) {
			return 'Fizz';
		}
		// - if number can be divided by 5: display **Buzz** ;
		if (isDivisible(Number(userNumber), [5])) {
			return 'Buzz';
		}
		// - else: display the number.
		return String(userNumber);
	}
	return { checkNumber, computeOutput, isDivisible };
}
