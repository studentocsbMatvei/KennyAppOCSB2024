const sqlite3 = require('sqlite3');
const prompt = require('prompt-sync')();
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('successfully connected to a DB!');
});

db.serialize(() => {
    db.run('CREATE TABLE orders (room_number INTEGER, food TEXT, drink TEXT)');

    const samples = [
        [112, 'cookies', 'coffee'],
        [234, 'none', 'tea'],
        [228, 'muffins', 'none']
    ];

    const stmt = db.prepare('INSERT INTO orders (room_number, food, drink) VALUES (?, ?, ?)');
    samples.forEach((row) => stmt.run(row));
    stmt.finalize();
});
db.all("SELECT * FROM orders", (err, info) => {
    console.log(err, info);
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
});
module.exports = db;