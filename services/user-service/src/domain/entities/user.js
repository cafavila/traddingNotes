class User {
    constructor({id, username, email, password}) {
        this.id = id
        this.username = username
        this.email = email,
        this.password = password,
        this.createAt = new Date()
    }
    changeEmail(newEmail) {
        this.email = newEmail
    }
}

export default User