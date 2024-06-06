const sqlite3 = require('sqlite3');
const prompt = require('prompt-sync')();
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('successfully connected to a DB!');
});

function loop_for_db() { //is not used currently due to a bug that doesn't allow to make fetch requests from frontent
    while (true) {
        let user_input = prompt('> ');
        if (user_input == 'print db') {
            console.log(err, info);
        }
        else if (user_input == 'stop' || user_input == 'break') {
            console.log('stopped');
            break;
        }
        else {
            console.log('undefined command');
        }
    }
}

db.serialize(() => {
    db.run('CREATE TABLE orders (room_number INTEGER, name TEXT, email TEXT, time TEXT, comments TEXT)');

    const samples = [
        [112, 'Matvei', 'some@email.com', '5 minutes', 'some comment'],
        [234, 'Jamieson', 'jamieson@ocsb.ca', '2 minutes', 'another comment'],
        [228, 'Chad', 'some@stu.ocsb.ca', '4 minutes', 'comment']
    ];

    const stmt = db.prepare('INSERT INTO orders (room_number, name, email, time, comments) VALUES (?, ?, ?, ?, ?)');
    samples.forEach((row) => stmt.run(row));
    stmt.finalize();
});
db.all("SELECT * FROM orders", (err, info) => {
    console.log(err, info);
});
module.exports = db;