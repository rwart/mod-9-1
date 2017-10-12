'use strict';
function getTriangleArea(a, h) {
  if ((a <= 0) || (h <= 0)) {
    return 'Nieprawidłowe dane';
  } else {
    return a * h / 2;
  }
}

function getTriangleAreaShort(a, h) {
  return ((a > 0) && (h > 0)) ? a * h / 2 : 'Nieprawidłowe dane';
}

console.log('TriangleArea = ' + getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 20);
var triangle3Area = getTriangleArea(30, 25);

console.log('triangle1Area = ' + triangle1Area +
          '  triangle2Area = ' + triangle2Area +
          '  triangle3Area = ' + triangle3Area);

console.log('Short:');
console.log('TriangleArea = ' + getTriangleAreaShort(10, 6));
console.log('triangle1Area = ' + getTriangleAreaShort(10, 15) +
          '  triangle2Area = ' + getTriangleAreaShort(20, 20) +
          '  triangle3Area = ' + getTriangleAreaShort(30, 25));
