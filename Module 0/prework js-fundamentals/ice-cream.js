const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];


function AddFlavour(iceCream) {
  iceCreamFlavours.push(iceCream);
  console.log(iceCreamFlavours);
}

/* Get the first flavour */
function FirstFlavour() {
  console.log(iceCreamFlavours[0]);
}

/* Get the last flavour */
function LastFlavour() {
  let flavour = iceCreamFlavours.length - 1;
  console.log(iceCreamFlavours[flavour]);
}

/* Get the last flavour */
function TotalNumFlavours() {
  console.log(iceCreamFlavours.length);
}

console.log(iceCreamFlavours);

AddFlavour("root beer");

FirstFlavour();

LastFlavour();

TotalNumFlavours();