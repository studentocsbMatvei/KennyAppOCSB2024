const { response } = require("express");

let backend_message;
function get_message() {
    fetch('http://localhost:5000/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('data recieved: ' + data.message);
    })
    .catch(error => {
        console.log('there was a problem with the fetching operation: ' + error);
    });
    return backend_message;
}

console.log('another string printed!');
get_message();
