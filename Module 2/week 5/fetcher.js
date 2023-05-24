const fs = require(`fs`);
const fetch = require('node-fetch');

/*
 * Input: A URL and a local file path 
 * Returns: print out a message like Downloaded and saved 1235 bytes to ./index.* html
 * Downloads the resource at the URL to the local path on your machine. Upon 
 * completion
 * Help: https://nodejs.dev/en/learn/writing-files-with-nodejs/
 * Help: https://github.com/node-fetch/node-fetch#plain-text-or-html
 */

const downloadFile = (remotePath, localPath) => {


  fetch(remotePath)
    .then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }

      // Examine the text in the response
      return response.text();
    })

    .then((data) => {

      if (data !== null) {

        if (!fs.existsSync(localPath)) {
          console.log(`Creating the file, it is ${data.length} bytes and saved to ${localPath}`);

          fs.writeFileSync(localPath, data);
        }
        else {
          fs.unlinkSync(localPath);

          console.log(`Creating the file, it is ${data.length} bytes and saved to ${localPath}`);

          fs.writeFileSync(localPath, data);
        }


      }
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });

};


downloadFile(`http://www.example.edu/`, `./index.html`);
