//for

// for(let index=0;index<10;index++){
//     const element=index;
//     console.log(element)
// }

//break and continue

// for(let index=0;index<10;index++){
//     const element=index;
//     console.log(element)
//     if(element==2){
//         console.log("bhagi jao")
//         break;
//     }
// }


// for(let index=0;index<10;index++){
//     const element=index;
    
//     if(element==2){
//         console.log("bhagi jao")
//        continue;
//     }
//     console.log(element)
// }



//while
// let MYarray=['1','20','30']
// let arr=3
// while(arr<MYarray.length){
//     console.log(`value is ${MYarray[arr]}`)
//     arr++;
// }


//do while
// let MYarray=['1','20','30']
// let arr=3

// do{
//     console.log(`value is ${MYarray[arr]}`)
//      arr++;
// }while(arr<MYarray.length)




//for of loop

// const arr=[1,2,3,4,5]

// for(const num  of arr){
//     console.log(num);
// }



//map
// const MYmap=new Map()
// MYmap.set('IN',"indea")
// MYmap.set('USA',"united state of america")
// MYmap.set('Fr',"France")

// MYmap.set('IN',"indea")

// console.log(MYmap)

// for(const [key,value] of MYmap){
//     console.log(key)
// }





//object for in loop
// const myObjects={
//     game1:'NFS',
//     game2:"spidernaem"
// }

// for (const key in myObjects) {
//    console.log(key)
//    console.log(myObjects[key])
// }

//array using for in loop
// const MYname=[1,2,3,4]
// for(const key in MYname){
//     console.log(MYname[key])
// }





//for each loop

// const coding=["js","rubt","cpp","java"]

// // coding.forEach(function (item){
// //     console.log(item)
// // })

// coding.forEach((item,index,arr)=>{
//     console.log(item)

// })





// const MYcoding=[
//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"c++",
//         languageFileName:"Cpp"
//     },
//     {
//         languageName:"python",
//         languageFileName:"py"
//     }
// ]

// MYcoding.forEach((item)=>{
//     console.log(item.languageName)

// })




//forEach loop return nhi krta value filter krta h jo jo gtrue hogi codition m

//filter function
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>
//     num>4
// )
// console.log(newNums)







// const books=[
//     {
//         title:'book one',
//         genre:'science',
//         publish:1992,
//         edition:2010
//     },
//     {
//         title:'book second',
//         genre:'science',
//         publish:1993,
//         edition:2011
//     },
//     {
//         title:'book third',
//         genre:'hindi',
//         publish:1994,
//         edition:2030
//     },
//     {
//         title:'book fourth',
//         genre:'english',
//         publish:1281,
//         edition:2000
//     },
//     {
//         title:'book fifth',
//         genre:'maths',
//         publish:1900,
//         edition:1996
//     },
// ]

// let userbook=books.filter((bk)=>bk.genre==='science'
// )
// userbook=books.filter((bk)=>
//     bk.genre==='science' && bk.publish ===1993
// )
// console.log(userbook)






// //map function
// const myNumbers=[1,3,4,6,7,8]
// const newNumber=myNumbers.map((num)=>num+10)
// console.log(newNumber)


// //chaining basically map ke baad baad lga sakte uske baad filter isko chaing bolte h

// const myNumber=[1,2,3,4,5]
// const newNumber=myNumber
//                 .map((num)=>num+10)
//                 .map((already)=>already+10)
//                 .filter((check)=>check>23)
//   console.log(newNumber)     




//reduce
const myNum=[1,2,3,4]
const myTotal=myNum.reduce((acc,currentValue)=>acc+currentValue,0)
console.log(myTotal)