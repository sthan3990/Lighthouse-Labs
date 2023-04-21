/* Take a array of strings and concatenate its contents together, with each list item separated from the previous one by a comma. */

const conceptList = ["gists", "types"];

function joinList(values) {
  let outputStr = "T";

  for (let i = 0; i < values.length; i++) {

    if (i + 1 != values.length) {
      outputStr += values[i] + ", ";
    }
    else {
      outputStr += values[i]
    }

  }
  return outputStr;
}



console.log(joinList(conceptList));

