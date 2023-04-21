function tail(values){

  let newArray = [];

  for(let i = values.length-1; i >= 0 ; i--){
    newArray.push(values[i]);
  }

  return newArray;
}

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // no need to capture the return value since we are not checking it

