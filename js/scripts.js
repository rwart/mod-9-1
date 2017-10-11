'use strict'

function getTriangleArea(a, h) {
  if ((a <= 0) || (h <= 0)) {
    return 'Nieprawidłowe dane';
  } else {
    return a * h / 2;
  }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 20);
var triangle3Area = getTriangleArea(30, 25);

console.log('triangle1Area = ' + triangle1Area +
          '  triangle2Area = ' + triangle2Area +
          '  triangle3Area = ' + triangle3Area);
