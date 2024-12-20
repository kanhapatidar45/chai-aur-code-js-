const Marvel_heros=["thors","Ironman","spiderman"]
const dc_heros=["suoerman","flash","barman"]
//// ye ek galt tarika h
// Marvel_heros.push(dc_heros)
// console.log(Marvel_heros[3][2])

//shi tarika
// const allHeros=Marvel_heros.concat(dc_heros)
// console.log(allHeros)



//aur acha tarika split
// const new_Heros=[...Marvel_heros,...dc_heros]
// console.log(new_Heros)

// const another_array=[1,2,[3,4,5,6],7,[6,3,5,[2,1]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("kanha"))
console.log(Array.from("kanha"));
console.log(Array.from({name:"kanha"}));

let score1=1;
let score2=2;
let score3=3;
console.log(Array.of(score1,score2,score3))