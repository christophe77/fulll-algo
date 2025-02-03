import { stdin as input, stdout as output } from 'process';
import readline from 'readline/promises';
import fizzBuzz from './fizzBuzz';

const {checkNumber, computeOutput} = fizzBuzz();

const readlineInterface = readline.createInterface({ input, output });

(async () => {
	try {
		const numberToCheck = await readlineInterface.question(
			'Give me a positive number (1, 2, 3, x) : ',
		);

		const checkNumberResponse = checkNumber(numberToCheck);

		if (checkNumberResponse.hasError) {
			console.log(checkNumberResponse.error);
		} else {
			console.log(computeOutput(numberToCheck));
		}
	} catch (error) {
		console.log(`Error: `, error);
	} finally {
		readlineInterface.close();
	}
	process.exit(0);
})();
