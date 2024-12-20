// function sayMyname(){
    
//     console.log("k")
//     console.log("a")
//     console.log("n")
//     console.log("h")
//     console.log("a")
// }
// sayMyname()



// function addTwoNumber(number1,number2){
//     console.log(number1+number2);

// }
// addTwoNumber(1,3)


// function addTwoNumber(number1,number2){
//     let result=number1+number2;
//     return result;

// }
// const result=addTwoNumber(1,5)
// console.log("result",result)


// function loginusername(username){
//     return `${username} just log in`
// }
// console.log(loginusername("kanha"))


// //agar argument nhi denge to vo null nhi undefined hoga
// function loginusername(username){
//     // if(username===undefined){
//     //     console.log("please enter a username")
//     //     return
//     //  }
// //uper aur niche wala dono same h
//     if(!username){
//         console.log("please enter a username")
//         return
//     }


//     return `${username} just log in`
    
// }

// console.log(loginusername())





// //agar function m no of argument jada h to  rest ka use krege (...)
// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,233300,33,55,57))
// //isme agaer hum (val1,val2...num1 kr denge to)
// function calculateCartPrice(val1,val2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,233300,33,55,57))



//object ko function kaise pass kiya jata h aur use kiya jata h 
const user={
    iusername:"kanha",
    age:21
}

function handledObject(anyobject){
    console.log(`username is ${anyobject.iusername} and age is ${anyobject.age}`)
}

// handledObject(user)
//direct bhi object pass kr sakte the bina create kre object 
handledObject({
    username:"kp",
    age:22
})

//array pass in function
const myNewArray=[100,200,300]
function secondvalue(getarray){
    return getarray[1]
}

// console.log(secondvalue(myNewArray))
//direct pass
console.log(secondvalue([1000,2000,3000]))