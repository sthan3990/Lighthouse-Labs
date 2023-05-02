/*  Fix debugging error
* function average(list) {
*  var sum = 0;
*  for (var num of list) {
*    sum ++ num;
*  }
*
* return sum / list.length;
* console.log(average([3, 5, 7]));
*/

function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;
  }
  console.log(sum);
  
  return sum / list.length;
}

console.log(average([3, 5, 7]));