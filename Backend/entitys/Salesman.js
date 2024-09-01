class Salesman {
    constructor(firstname, lastname, sid) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.sid = sid;
    }

    // #### GET METHODEN
    
    get firstname() {
        return this.firstname;
    }

    get lastname() {
        return this.lastname;
    }

    get sid() {
        return this.sid;
    }

}

module.exports = Salesman;