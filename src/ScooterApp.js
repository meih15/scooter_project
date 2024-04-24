// const Scooter = require('./Scooter');
const User = require('./User');

class ScooterApp {

    constructor() {
        this.stations = {
            "Station 1": [],
            "Station 2": [],
            "Station 3": []
        };

        this.registeredUsers = {};
    }

    registeredUser(username, password, age) {
        if (this.registeredUser[username]) {
            throw new Error('User has already been registered');
        } 
        
        if (age < 18) {
            throw new Error('User is too young to register')
        }

        const user = new User(username, password, age);
        this.registeredUser[username] = user;
        console.log(`User '${username}' has been registered.`);
        return user;

    }

    
};

module.exports = ScooterApp