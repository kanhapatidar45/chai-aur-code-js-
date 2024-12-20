//objects 
//type1 lietrals
const mysym=Symbol("key1")
const JsUser={
    name:"kanha","full name":"kanha Patidar",
    [mysym]:"mykey",
    age:21,
    location:"indore",
    email:"kanah.pub45@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","sunday"]
    
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser.name)
console.log(JsUser["full name"])

console.log(JsUser[mysym])


JsUser.email="kk@gmail.com"
// Object.freeze(JsUser)
JsUser.email="ss@gmail.com"
console.log(JsUser)


JsUser.greeting=function(){
    console.log("hello js user");

}

JsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`)
}

console.log(JsUser)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())