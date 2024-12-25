// //promise creation
// const promiseOne=new Promise(function(resolve,reject){
//     //do an async task
//     setTimeout(function(){
//         console.log('asyc task is complete')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise consumed")

// })



// const PromiseTwo =new Promise(function(resolve,reject){
//    setTimeout(function(){
//          resolve({username:"chai",email:"aa@gmail.com"})
//    },1000)
// }).then(function(user){
//     console.log(user)
// })


// const PromiseThree =new Promise(function(resolve,reject){
//     setTimeout(function(){
//           let error=false
//           if(!error){
//             resolve({username:"kanha",password:133})
//           }
//           else{
//             reject('error:something glt')
//           }
//     },1000)
//  }).then((user)=>{
//      console.log(user)
//      return user.username
//  }).then((username)=>{
//     console.log(username)
//  }).catch((error)=>{
//     console.log(error)

//  }).finally(()=>{
//     //jo finally h vo default h chaiye resolve ho ya reject ho ye to hota hi h
//     console.log("the promise is either resolve or rejected")
//  })


// aync await is same as then catch but modern h

//  const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//           resolve({username:"js",password:133})
//         }
//         else{
//           reject('error:js glt')
//         }
//   },1000)
//  })

//  async function consumePromiseFive(){
//     try {
//         const response=await promiseFive
//          console.log(response)
        
//     } catch (error) {
//         console.log(error)
        
//     }
      
//  }
// consumePromiseFive()
//  //async await is same as then catch for handling




//  fetch api using then cacth and async await bothe are same

async function getAlluser(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error )
        
    }
 }

 getAlluser()


//  using then catch
 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>{
    console.log(data)
 })
 .catch((error)=>{
    console.log(error)
 })
