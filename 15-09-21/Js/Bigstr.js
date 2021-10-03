// const biggerStr = (str1, str2) => {
//     if (str1.length > str2.length){
//         return str1 + "_" + str1.length;
//     }
//     else{
//         return str2 + "_" + str2.length;
//     }
// }
// console.log(biggerStr("India", "Hindustan"
// ))

const biggerStr= (str1, str2) => str1.length > str2.length ? str1 + "_" + str1.length : str2 + "_" + str2.length ;

console.log(biggerStr("Hindustan", "India"));