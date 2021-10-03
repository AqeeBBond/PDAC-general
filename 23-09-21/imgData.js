// const imgData = (arr) => arr.map(item=>item["url"]);
// console.log(imgData([
//         {url: "google.com", title: "Google"},
//         {url: "yahoo.com", title: "Yahoo"},
//         {url: "gmail.com", title: "Gmail"},
//         {url: "amazon.com", title: "Amazon"},
//     ])
// );



const imgData = (arr) => arr.map((item=>`<img src="${item.url}" alt="${item.title}"/>`));
console.log(imgData([
        {url: "google.com", title: "Google"},
        {url: "yahoo.com", title: "Yahoo"},
        {url: "gmail.com", title: "Gmail"},
        {url: "amazon.com", title: "Amazon"},
    ])
);
