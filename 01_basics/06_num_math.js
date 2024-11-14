
// const number=100
// console.log(number)//ye old tarika h isme hume inbuilt method nhi milte use krne ko 
// //ye new tarika h niche
// const balance=new Number(2424)
// console.log(balance)


// //method
// //toString
// console.log(balance.toString())
// console.log(typeof balance)

// //tofixed
// console.log(balance.toFixed(3))

// //toprecision
// const another=new Number(23.3232)
// console.log(another.toPrecision(3))

// //tolocalString
// const money=new Number(1000000)
// console.log(money.toLocaleString('en-In'))




/*******************************maths library h jisme already bhot sari property hai******************************/

// console.log(Math.abs(-4))
//  console.log(Math.round(3.4922))
//  console.log(Math.ceil(4.3))
//  console.log(Math.floor(4.69))
//  console.log(Math.sqrt(2))
//  console.log(Math.pow(2,3))
//  console.log(Math.min(2,3,4,51))
//  console.log(Math.max(2,3,4,51))


//generate no in between 0 -10
console.log(Math.random())
 
//for avoid 0  we add +1 exaM RAndom value will be 0.04*10=0.4 so add+1 =4
 console.log((Math.random()*10)+1)
 console.log(Math.floor(Math.random()*10)+1)
 

 //khi bar aisa hoga ki hume min aur max value ki bich ki chaiye to ek trick ya formuala h jaise
 const min=11
 const max=19
 console.log(Math.floor(Math.random()*(max-min+1))+min)