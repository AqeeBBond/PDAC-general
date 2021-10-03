// const bigNum = (num1, num2) => (num1 > num2 ? num1: num2)
// console.log(bigNum(1005, 5487));

const bigNum = (num1, num2) => {
    if (num1 > num2) {
    return num1;
}else{
        return num2;
}
};
console.log(bigNum('Pakistan','India'));