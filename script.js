// Variable,Constant And Comments
var a=60
var a=70 //redeclare
console.log(a)

let value=20
console.log(value)
const b=10
console.log(b)

//String
let c="Hello"
let d="Programmer"
// console.log(c,d)
// String Operation method-1 usin (+)
let e=c +" "+ d
// console.log(e)

// Method 2 Template literals
let f=`Hello Welcome to programming ${c} ${d}`
console.log(f)

//Getting string character
console.log(c[2])
// String Methods
console.log(c.toUpperCase())
console.log(c.indexOf('l'))
console.log(f.lastIndexOf("Welcome"))  //Case Sensitive
//include method
console.log(f.includes("Welcome"))
//slice
let m='wowprograming'
console.log(m.slice(0,5)) //Excluding last one

// Common String Methods
let i='      helooo my life   '
console.log(i)
let res=i.trim();
console.log(res)

//split
let colors="yellow red blue";

console.log(colors.split(" ")) //string to array

// js string r Immutable
let str='Hello';
str[0]='p';
console.log(str)

/*Numbers*/
let scr=50
console.log(scr, typeof scr)
// Mathematical Expression
let result= scr * 2+(4*3)-8/2%4 //100+12-0


// Using Priority and precedence
//1 ()
//2 ** power Operator
//3 * / % (from left to right)
// 4 + -
console.log(result)

//Number method
let numtype=Number(str) //** {imp}in number method passin string value must b numeric value
// Arrays
let arr=['arr','ayy','imuu']
// modify array
arr[0]="arfeen"
console.log(arr)
// join method
console.log(arr.join('-'))
//concat
let news =['ammi','rishi']
// console.log((arr.concat(news)))
// console.log(news.length)
// //push methos
// console.log(news.push("yog"))
console.log(news.pop())
console.log(news)
//Loops

// for(let i=1;i<10;i++){
// console.log("Hello I'm trying to be a gd programmer ",i)
// }
// let dishs=['arfeen','ayaan','rishi']
// for(let i=1;i<dishs.length;i++){
//     console.log(dishs[i]);
// }

//while Loop
let j=0
while(j<5){
    console.log("Hello sunshine ",j)
    j++;
}
function nameOfFunction(){
    console.log("Welcome to new function")
}
nameOfFunction()
//functions
let fun=function(name="imuu",time="night"){ //local variable
    console.log(`Welcome ${name} to my function ${time}`)
}
fun()
fun("Arfeen")
fun("Ayaan")

//function Expression

 let fun1=function(){ //also called anonymous funtion
//     console.log("Hi my sunshine")
}
fun1()
// returning values
let ageCalculation=function(birthyear,currentyr){
let age1 = currentyr-birthyear;
return age1;
}
console.log(ageCalculation(1999,2023))

//Arrow Function
let invitation=name=> `Welcome to my ${name} Arrow function`
console.log(invitation("first"))

//Passing Function as a Argument(Higher Order function exmple)
let upperCase=function(str){
    return str.toUpperCase()
}
let lowerCase=function(str){
    return str.toLowerCase()
}
let trnsform=function(fun1,str){
return fun1(str)
}
console.log(trnsform(upperCase,"hello"))

//Function returns another function
let compliment=function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
    }
};
console.log(compliment("Hello Welcome to Arfeen World")("Everyone"))
