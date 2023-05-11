import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// GOT HELP: https://stackoverflow.com/questions/18193953/waiting-for-user-to-enter-input-in-node-js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

const askQuestion = (textQuestion) => {

  return new Promise(resolve => rl.question(textQuestion + `: `, answer => {

    // Data validation 
    if (answer != ``) {

      resolve(answer);

    }
    // Ask question again if user didn't input anything
    else {

      askQuestion(textQuestion);

    }
  }))
}

const main = async() => {

  // Array that holds all the questions
  let questions = [
  `What's an activity you like doing?`,
  `What do you listen to while doing that?`,
  `Which meal is your favourite (eg: dinner, brunch, etc.)`,
  `What's your favourite thing to eat for that meal?`,
  `Which sport is your absolute favourite?`,
  `What is your superpower? In a few words, tell us what you are amazing at!`,
  ] 

  // Array that holds all the responses 
  let responses = [];
  
  // Ask the questions 
  for (let i = 0; i < questions.length; i++) {

    // ask each question from the questions array 
    let ans = await askQuestion(questions[i]);

    // add this response to the array 
    responses.push(ans);
  }
  
  console.log(`\n -------- \n`);

  for (let i = 0; i < responses.length; i++){
    console.log(`${questions[i]}: \n Response Was: ${responses[i]}`);

  }

  rl.close();

}

main();
 