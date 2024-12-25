// //this keyword current context ko point krat h object literal m
// const user1={
//     username:"hitesh",
//     loginCount:0,
//     signedIn:true,
//     getUserDetails:function(){
//         console.log(`Username:${this.username}`)
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails)





//constructor function
function User(username,loginCount,isLoggedIn){
    this.username=username
    this.isLoggedIn=isLoggedIn
    this.loginCount=loginCount

    this.greeting=function(){
        console.log(`welcome${this.username}`)
    }

    

}
const userOne= new User("kanha",true,1)
const userTwo= new User("hitesh",true,22)
console.log(userTwo)
