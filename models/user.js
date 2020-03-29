const users = [];

module.exports = class User {
    constructor(user) {
        this.email = user.email;
        this.username = user.username;
        this.password = user.password;
        this.confirmPassword = user.confirmPassword
    }

    save() {
        users.push(this);
    }

    static fetchAll() {
        return users;
    }
}