const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(':memory:');

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

module.exports = db;