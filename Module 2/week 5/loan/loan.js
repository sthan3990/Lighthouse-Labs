const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let creditLimit = 5000;

/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit.
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out, otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */
const loanOut = (amount) => {

  return new Promise((resolve, reject) => {

    if (creditLimit <= 0) {
      reject(`Amount requested exceeds credit limit`);
    } else if (amount > creditLimit) {
      creditLimit = amount - creditLimit;
      resolve(creditLimit);
    } else {
      creditLimit = creditLimit - amount;
      resolve(amount);
    }


  });
};

const askQuestion = (textQuestion) => {

  return new Promise(resolve => rl.question(textQuestion + `: `, answer => {

    // Data validation
    if (answer !== ``) {
      resolve(answer);
    }
    // Ask question again if user didn't input anything
    else {

      askQuestion(textQuestion);
    }


  }));
};

const main = async () => {
  askQuestion(`How Much Do You Want To Take Out?`)
    .then(loanOut)
    .then((amountReceived) => {
      console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
    })
    .then(main)
    .catch((err) => {
      console.log(`\t-> Error: ${err}!`);
    });
};


main();