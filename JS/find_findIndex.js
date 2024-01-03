const arr1 = [
  { firstName: "jay", age: 35 },
  { firstName: "arun", age: 30 },
  { firstName: "joe", age: 35 },
];

const arr2 = arr1.find((ele, i, arr) => ele.age === 30);

console.log("arr2==>", arr2);

const arrIndex = arr1.findIndex((ele, i, arr) => ele.age === 30);

console.log("arrIndex==>", arrIndex);
