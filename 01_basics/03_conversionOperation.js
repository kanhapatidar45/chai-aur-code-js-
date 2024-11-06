let score = 33
console.log(typeof score);
console.log(typeof (score))

let marks ="34aa"

console.log(typeof marks);
console.log(typeof (marks))

//conversion from string to number
let valueInNumber=Number(marks);
console.log(typeof valueInNumber);
console.log(valueInNumber)

let target=null;
let valTarget=Number(target)
console.log(valTarget)

let state= undefined
let valState= Number(state)
console.log(valState)

let boolean= true;
let valBoolean=Number(boolean)
console.log( valBoolean)

/*
conversion from any datatype to number
//"33"=>33
//"33abc"=>NAN
//true=>1, false=>0
//null=>0
//undefined=>NAN
 */


//conversion fron datatype to boolean
let number=1;
let valNumber=Boolean(number);
console.log(valNumber)

let num=0;
let valNum=Boolean(num);
console.log(valNum)

let nam="";
let valnam=Boolean(nam);
console.log(valnam)

let newnam="hardik";
let valnewnam=Boolean(newnam);
console.log(valnewnam)


//1=>true, 0=>false
//""=>false
//"hitesh"=>true

//conversion to datatype to string
let someNum=33
let valSomeNum=String(someNum);
console.log(valSomeNum)
console.log(typeof valSomeNum)