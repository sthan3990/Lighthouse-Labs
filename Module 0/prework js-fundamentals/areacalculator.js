
function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0) {
    let rectArea = 0;
    rectArea = length * width;
    return rectArea;
  }
  else 
  {
    return "undefined";
  }
}

function calculateTriangleArea(base, height) {
  if (base >= 0 && height >= 0) {
    let triangleArea = 0;
    triangleArea = base * height * 0.5;
    return triangleArea;
  }
  else {
    return "undefined";
  }
}

function calculateCircleArea(radius) {
  if (radius >= 0) {
    let circleArea = 0;
    circleArea = Math.PI * radius * radius;
    return circleArea;
  }
  else {
    return "undefined.";
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
