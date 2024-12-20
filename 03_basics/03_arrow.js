////jo this rhta h vo current object ko point krta h hum this ka use function m nhi kr skate directly
// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this)

//     }
// }

// user.welcomeMessage()
// console.log(this)

/***normal object function */
// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()


/**********arrow function**/
// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username);
// }

// chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2

// }

//agar carly braces nhi use kiya to return  nhi likhna padega
// const addTwo=(num1,num2)=>(
//      num1+num2
// )

const addTwo=(num1,num2)=>{{username:"kamha"}}

console.log(addTwo(2,4))