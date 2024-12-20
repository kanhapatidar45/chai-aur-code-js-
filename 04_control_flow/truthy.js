// const userEmail="h@hitesh.ai"

// if(userEmail){
//     console.log("got user email")
// }
// else{
//     console.log("dont have email")
// }

// const user=""

// if(user){
//     console.log("got user email")
// }
// else{
//     console.log("dont have email")
// }

//false values

false,0,-0,BigInt,0n,"",null,undefined,NaN

//iske alawa jitne bhi h vo sb truthy value h

//nullish coalescing operator(??):null undefined

let val1;
// val1=5??10
// val1=null??10
val1=undefined??12??19
console.log(val1)


//terniary operator
//condition?true:false

const Iceprice=100;
Iceprice>=80?console.log("more than 80"):console.log("smaller than 80");

