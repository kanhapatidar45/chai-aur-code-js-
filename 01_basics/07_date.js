// // current date syntax
// let myDate=new Date()
// // console.log(myDate)
// console.log(myDate.toDateString())
// // console.log(myDate.toISOString())
// // console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

//user defined date
// let userDate=new Date(2024,0,6)
// console.log(userDate.toDateString())
// let userDate=new Date(2024 , 0 , 6 , 5 , 3)
//  let userDate=new Date( "2022-10-11")
// let userDate=new Date( "11-10-2021")
// console.log(userDate.toLocaleString())


// let myCreatedDate=new Date(2021,3,18)
// //console.log(myCreatedDate.toDateString());
// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// //time seconds m chaiye to
// // console.log(Math.floor(Date.now()/1000))


let newDate=new Date()
console.log(newDate)
console.log(newDate.getFullYear())
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.toLocaleString())

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))