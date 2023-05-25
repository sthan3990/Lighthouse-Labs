/**
 * @param {number} millis
 */
async function sleep(millis) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, millis);
  });

};

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/

async function main() {
  sleep(100)
    .then((data) => {
      console.log(`Done Sleeping`);
    })
    .catch((err) => {
      console.log(`\t-> Error: ${err}!`);
    });
}

main();

