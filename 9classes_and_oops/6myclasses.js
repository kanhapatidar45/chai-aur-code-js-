//classes js m es6 ke bad aye 
// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     ChangeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai =new User("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword())
// console.log(chai.ChangeUsername())

//behind the scene agar classes available nhi hoti to aise hota 

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.ChangeUsername=function(){
     return `${this.username.toUpperCase()}`
}

const chai =new User("tea","tea@gmail.com","321")
console.log(chai.encryptPassword())
console.log(chai.ChangeUsername())
