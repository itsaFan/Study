import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

const answer = await rl.question('What do you think of NodeJS? ');
const answer2 = await rl.question('What you eat today? ');
const totalAnswer = answer + answer2;
console.log(`Thank you for your valuable feedback: ${totalAnswer}`);

rl.close();