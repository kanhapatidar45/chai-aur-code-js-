class User{
    constructor(username){
        this.usernam=username
    }
    logMe(){
        console.log(`username:${this.username}`)
    }
    //static keyword ky krta h ki uss mehtod ya property ko access hone se rok deta h
    static createId(){
        return `123`
    }
}
const hitesh=new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new Teacher("iphone","i@phone")
iphone.logMe()
console.log(iphone.createId())