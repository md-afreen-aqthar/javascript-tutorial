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

//Higher order functions
 const radius=[3,4,1,6]
 const area=function(radius){
     const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}; 
console.log(area(radius))

 const circum=function(radius){
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i])
        
    }
    return output
 }; console.log(circum(radius))

//optimizin above code by using generic abstrction

const area2=function(rad){
    return Math.PI*rad*rad
};
const circums=function(rad){
    return 2*Math.PI*rad
};
const rad=[3,4,1,6]
const area1=function(rad,logic){
    const output=[]
    for(let i=0;i<rad.length;i++){
        output.push(logic(rad[i]))
    }
    return output
};
console.log(area1(rad,area2));
console.log(area1(rad,circums));

//Function
//Immediately Invoke function Expression
//now this is expression
(function(name){
    console.log("Hello checkin function", name)
})("Arfeen")

// setTimeOut and setTImeInterval
// setTimeOut -->runs after "once" after Interval of time
// setTimeInterval -->runs repeatedly strting after the interval of time,then repeatedly
//setTimeOut(func|code,delay,args1,args2,.....)
function greeting(){
   // console.log("Lets hava look on setInterval , n hw it wrks")
}
setTimeout(greeting,5000) //whch means 1sec=1000 thrfore 5000ms=5sec

// setInterval
//setInterval(greeting,5000)

//Hoisting
// Variable "declaration" r "hosted toword" "top" of scope
test=10
console.log(test)
var test

//function declaration
test1()
function test1(){
    console.log("Welcome to hoistin concept")
}

//Not function expression or arrow function
/*test()
let test=function(){
    console.log("Welcom to Hoisting Concept in JS")
}*/  //ths function doesnt support hoistin 

//INTRODUCTION TO OBJECTs
let car={
    color:"blue",
    model:"2022",
    company:"Honda"
}
console.log(car)
//Accessing property of object
console.log(car["company"]);
console.log(car.company);
let propertyName="color";
console.log(car[propertyName]);
console.log(car.color);


//Modify Object
car.color="brown"
console.log(car.color)

//Delete properties of object
let bike={
    prop1:"bullet",
    prop2:"KTM"
}
delete bike["prop1"]
console.log(bike["prop1"])

//Function Vs Method
//Methos --> It is ntg but object(Key) holding
//Function as "Value"
let person={
    ageCalc: function(birthyr=2003){
let age=2023-birthyr;
return age;
    }
}
console.log(person.ageCalc())

//this Keyword
//In each method we hav an access of special keyword called "this"

//this keyword represnts the object: "calling" the "method"
//In whch "this" is "present"
//Exmple
let obj={
    firstName: "Arfeen",
    lastName: "md",
    city: "Hyderabad",
    getsum:function(){
        return `${this.firstName} from ${this.city}`
    }
}
console.log(obj.getsum())
//forEach method of array
let dishes=["Biryani","chicken tikka","manchuria"]
//for loop
for(let i=0;i<dishes.length;i++){
console.log(dishes[i])
}
console.log("************")
//foreach
dishes.forEach(function(ele){
    console.log(ele)
})

//Object inside array
let dish=[{frstName: "Arfeen",lastName: "md"},{userName:"Arfeen",age:20}]
console.log(dish)
for(let i=0;i<dish.length;i++){
    console.log(dish[i].frstName)
}

//Math Object is built in object in js
let n1=7.6
console.log(Math.round(n1)); //round to nearest integer
console.log(Math.floor(n1)); //round to down
console.log(Math.ceil(n1)) //round to up
console.log(Math.trunc(n1)) //rmove decimal part

//Function
//call and apply method
//we can manually set the value of "this" keyword using call and apply method
let plain={
    airline:"Fly India",
    iatacode: "FI",
    booking:[],
    book:function(flightNum,name){
console.log(`${name} Book Flight on ${this.airline} with Flight Number ${this.iatacode} ${flightNum}`)
this.booking.push({flight:`${this.airline}`, name:name})
    }
}
plain.book(5523,"Arfeen")
console.log(plain)
let childPlain={
    airline: "Child Plain",
    iatacode: "CP",
    booking:[],

}
let book=plain.book
book.call(childPlain,234,"Ayaannn")
console.log(childPlain)

book.apply(childPlain,[4569,"Ayuu"])

//"bind" method
function greet(){
    console.log(`Welcome ${this.frstName} and ${this.lastName}`)
}
let user={
    frstName:"Afuu",
    lastName: "imuu"
}
let greet1=greet.bind(user);
greet1()

//"object/arrays" how "reference" are passed to variable
let arr44=[5,3,7,6,4,13];
let getref=arr44
getref.shift()
getref[3]=10

console.log(arr44)
console.log(getref)
console.log("***********")
//pass by value
let getVal=[...arr44]  //... is spread operator whch is used for cpyin
getVal[6]=8
console.log(arr44)
console.log(getVal)

//for-in loop
let car1={
    model:2022,
    color:"blue",
    company:"Toyota"
}
for(let x in car1){
    console.log(x)
}

//Gettin html elements using querySelecter/All
//"querySelector" returns "first elemnt" that much Css Selector
//To get all mached elemnts we use "querySelectorAll"

//  let res1=document.querySelector('p')
//  console.log(res1)
//  let res2=document.querySelectorAll('p')
//  console.log(res1)

//  //Access Element with class
//  let ress=document.querySelectorAll('.coding')
//  console.log(ress)
//  //Access Elemnt with id
//  let res3=document.querySelectorAll('#coding')
//  console.log(res3)
// //Get elemnt by tagNme
// let ele=document.getElementsByTagName('p')
// console.log(ele)
//Get elemnt by className
// let ele1=document.getElementsByClassName('coding')
// console.log(ele1)

//innerText n innrhtml
let res1=document.querySelector('.coding')
res1.innerText='<p>This is innerText</p>'
res1.innerHTML+='<p>This is innerHTML</p>'
//console.log(res1.innerText)'
//innrHTML
//console.log(res1.innerHTML)

//Getting and setting the attribute of elements

let lnk=document.querySelector('a')
console.log(lnk.getAttribute('href'))
//for setting new lnk in place of old link
lnk.setAttribute('href',"https://github.com/md-afreen-aqthar/javascript-tutorial")
console.log(lnk.getAttribute('href'))
lnk.innerText="This is my GitHub link"

//Adding the style
let headin=document.querySelector('h1')
headin.style.color="red"