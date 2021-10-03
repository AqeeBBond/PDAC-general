const cubicArray = (data) => {
  const newArray = [];
  data.forEach((item) => {
    //   const cube = Math.paw(item, 3);
      newArray.push(Math.pow(item,3));
  });
  return newArray;
};

console.log(cubicArray([2,4,5,7]));


