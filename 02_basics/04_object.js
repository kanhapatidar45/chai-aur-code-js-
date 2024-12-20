//typ2 singleton using constructor

// const tinderUser=new Object()
// tinderUser.id="124"
// tinderUser.name="sammy"
// tinderUser.isLoggedIn=false
// console.log(tinderUser)


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))
// //check propewrty in object
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// const regularUser={
//     email:"kk@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"kanha",
//             lastname:"patidar"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname)


// //2 object combine
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// // const obj3=Object.assign({},obj1,obj2)
// //jada hum niche wala use krege
// const obj3={...obj1,...obj2}
// console.log(obj3)


const course={
    courname:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}


const {courseInstructor:instructor,price:newPrice}=course

console.log(instructor)
console.log(newPrice)

