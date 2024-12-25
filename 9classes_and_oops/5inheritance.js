class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai= new Teacher("chai","chai@gamil.com","124")
chai.addCourse()
const masalachai= new User("masalachai")
masalachai.logMe()

console.log(chai instanceof Teacher)