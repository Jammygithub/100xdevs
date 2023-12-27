const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map(function (arr) {
  return arr * 2;
});

console.log("arr1==>", arr1);
console.log("arr2==>", arr2);

const arr3 = arr2.map((arr) => arr * 2);
console.log("arr3==>", arr3);

const arr4 = arr1.filter((arr) => arr > 2);
console.log("arr4==>", arr4);

/* map function 
const newArray = array.map(function(element, index, array) {
  // Return the result of applying the function to each element
});
*/

const newArr1 = arr1.map((element, i, arr) => {
  console.log("ele==>i", element, i, arr);
  return element;
});

console.log("newArr1==>", newArr1);

/* filter function
const newArray = array.filter(function(element, index, array) {
  // Return true to include the element, false to exclude it
});
 */

const newArr2 = arr1.filter((ele, index, arr) => {
  if (ele > 2) {
    return ele;
  }
});

console.log("newArr2==>", newArr2);

/* reduce function
const result = array.reduce(function(accumulator, element, index, array) {
  // Return the updated accumulator based on the element
}, initialValue);
*/

const Total = arr1.reduce((acc, ele, i, arr) => {
  return acc + ele;
}, 0);

console.log("Total==>", Total);

const max = arr1.reduce((acc, ele, i, arr) => {
  if (acc > ele) {
    return acc;
  } else {
    return ele;
  }
}, arr1[0]);

console.log("max==>", max);
