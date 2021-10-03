import { employees } from "./ExternalData";

const result = employees.data.map((item) => `${item.salut} ${item.midleName}`);

console.log(result);







// const data = [
//     { salut: "Mr",firstName: "Rahim", midleName: "Samad", lastName: "Shaikh" },
//     { salut: "Ms",firstName: "Sumit", midleName: "Vikram", lastName: "kadarkar" },
//     { salut: "Mr",firstName: "Rohit", midleName: "Utkarsh", lastName: "Jha" },
// ];

// const result = data.map((item) => `${item.salut} ${item.midleName}`);
// // const result = data.map((item) => `Mr. ${item.midleName}`);

// console.log(result);