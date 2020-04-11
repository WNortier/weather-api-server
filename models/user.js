const db = require('../utility/database');

module.exports = class User {
    constructor(user) {
        this.email = user.email;
        this.username = user.username;
        this.password = user.password;
        this.confirmPassword = user.confirmPassword
    }

    async save() {
        return await db.execute('INSERT INTO users (email, username, password, is_admin, register_date) VALUES (?, ?, ?, ?, ?)', 
        [this.email, this.username, this.password, 0, new Date()]
        );
        //users.push(this);
    }

    static async fetchAll() {
        return await db.execute('SELECT * FROM users');
    }
}