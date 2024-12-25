
// let myHeros=["thor,spiderman"]

// let heroPower={
//     thor:"hammer",
//     spiderman:"sling",
//     getSpider:function(){
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.hitesh=function(){
//     console.log(`hitesh is present in all object`)
// }


// Array.prototype.heyhitesh=function(){
//     console.log(`hitesh says hello`)
// }
//  heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyhitesh()
// //heroPower.heyhitesh() array ke pass function access ki power nhi hoti h



//inheritence
// cosnt User={
//     name:"chai",
//     email:"chai@gmail.com"
// }
// const Teacher={
//     makevideo:true
// }

// const TeachingSupport={
//     isAvailable:false
// }

// const TASupport={
//     makeAssignment:'js assignment',
//     fullTime:true,
//     _proto_:TeachingSupport
// }
// Teacher._proto_=User

// //modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)


//isme m chahata hu ki mko ek mehtod mil jae truelenght jo directly iski lenght de de


let anotherUsername="chaiAurCode    "
String.prototype.truelength=function(){
console.log(`${this}`)
console.log(`true length is :${this.trim().length}`)
}
anotherUsername.truelength()
"hitesch".truelength()
"kanha".truelength()