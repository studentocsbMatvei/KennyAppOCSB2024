const { response } = require("express");

let backend_message;
async function getData() {
    try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        backend_message = data.message;
    } catch (error) {
        console.error(error);
    }
}

getData().then(() => {
    console.log(backend_message);
});