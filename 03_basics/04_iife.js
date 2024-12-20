// global scope ke pollution se problem hoti h khi barr isliye global scope ke varibale h ya jo bhi declaration ko htane ke liye humne iife ka use krte h h (IMMEDIATELY INVOKED  FUNCTION EXPRESSION) 
(function chai(){
    console.log(`DB CONNECTED SUCCESSFULLY`)
})();

((name)=>{
    console.log(    `db connected to ${name}`)

})("kanha");
