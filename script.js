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
let arr=['arr','ayy','ayaan']
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
let fun=function(name="Ayaan",time="night"){ //local variable
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
    lastName: "Ayaan"
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

// //Gettin html elements using querySelecter/All
// //"querySelector" returns "first elemnt" that much Css Selector
// //To get all mached elemnts we use "querySelectorAll"

// //  let res1=document.querySelector('p')
// //  console.log(res1)
// //  let res2=document.querySelectorAll('p')
// //  console.log(res1)

// //  //Access Element with class
// //  let ress=document.querySelectorAll('.coding')
// //  console.log(ress)
// //  //Access Elemnt with id
// //  let res3=document.querySelectorAll('#coding')
// //  console.log(res3)
// // //Get elemnt by tagNme
// // let ele=document.getElementsByTagName('p')
// // console.log(ele)
// //Get elemnt by className
// // let ele1=document.getElementsByClassName('coding')
// // console.log(ele1)

// //innerText n innrhtml
// let res1=document.querySelector('.coding')
// res1.innerText='<p>This is innerText</p>'
// res1.innerHTML+='<p>This is innerHTML</p>'
// //console.log(res1.innerText)'
// //innrHTML
// //console.log(res1.innerHTML)

// //Getting and setting the attribute of elements

// let lnk=document.querySelector('a')
// console.log(lnk.getAttribute('href'))
// //for setting new lnk in place of old link
// lnk.setAttribute('href',"https://github.com/md-afreen-aqthar/javascript-tutorial")
// console.log(lnk.getAttribute('href'))
// lnk.innerText="This is my GitHub link"

// //Adding the style
// let headin=document.querySelector('h1')
// headin.style.color="red"
// //Add the class
// headin.classList.add('newClass')

// //Remove the class
// //headin.classList.remove('newClass')
// //Replace the class
// headin.classList.replace('newClass','replacedClass')

// //Parent,Children,Sibling element
// let parent=document.querySelector('.content')
// console.log(parent.children)

// //We cannot run foreach loop in HTMLCollections
// //First convert into array
// // console.log(Array.from(parent.children))
// // Array.from(parent.children).forEach(function(element){
// //     // element.classList.add("Addedclass")
// // })

// //child Element
// let childelement=document.querySelector('h2')
// //find a parent of specific child
// console.log(childelement.parentElement)
// //find next element sibling
// console.log(childelement.nextElementSibling)

//Event Basics (click Event)
let evnt1=document.querySelector('.ClickHere')
// console.log(evnt1)
// evnt1.addEventListener('click',function(){
//     console.log("clicked")
// })
// const ul=document.querySelector('ul')
// let button=document.querySelector('.ClickHere')
// button.addEventListener('click',function(){
//     let li=document.createElement('li')
//     li.textContent="Something new is added"
//     ul.append(li) //append for adding at the end
//     ul.prepend //prepend for addin in the begining
// })
// let evnt2=document.querySelectorAll('li')
// evnt2.forEach(function(element){
// element.addEventListener('click',function(e){
//     console.log(e.target)
//    // e.target.style.textDecoration="line-through"
//   // e.target.remove()
// })
// })
//copy event
// let copyRightElement=document.querySelector('.copy')
//  copyRightElement.addEventListener('copy',()=>{
//     console.log("You could not copy this")
//  })

 //form event (Submit Form)
//  let form =document.querySelector('.sign-up-Form')
//  let email=document.querySelector('#email')
//  let password=document.querySelector('#password')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
// console.log(form.email.value,form.password.value) //for getting written mail n passwrod

// })
//Regular Expression
//It is pattern of Characters used to do pattern matchin
//Or we can say "Data Validation"
//Implementation of password validation

//Length atleast 8
//atleast contain 1 lower case
//atleast contain 1 uppr case
// let form =document.querySelector('.sign-up-Form')
// let email=document.querySelector('#email')
// let password=document.querySelector('#password')
// let passwordpattrn="^(?=.*?[A-Z])(?=.*[a-z])(?=.*?[0-9]).{8,}$"
// form.addEventListener('submit',(e)=>{
// e.preventDefault()
// let passwordValue=password.value
// console.log(passwordValue)
// let res=passwordValue.match(passwordpattrn)
// if(res){
//     console.log("Your Password is strong")

// }
// else{
// console.log("Try again")
// }
// })

//Keyboard Event
let form=document.querySelector('.sign-up-Form')
let user1=document.querySelector('#name')
let password=document.querySelector('#password')
let userNamePattern=/^[A-Za-z]{6,12}$/
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let username=user.value
    //'test' method return boolean value
    let result=userNamePattern.test(username)
    if(result==true){
        console.log("Username is valid")
    }
    else{
        console.log("Username is not valid")
    }
    
})

//Live feedback
// user1.addEventListener('keyup',(e)=>{
//     if(userNamePattern.test(e.target.value)){
//         console.log("Passed")
//     }
//     else{
//         console.log("Failed")
//     }
// })

//Working with arrays
let ltr=["a","b","c","d"]
let rev=ltr.reverse()
console.log(rev)
//concat
let concatinate=ltr.concat("Arfeen")
console.log(concatinate)
//join
let lttr=ltr.join('-')
console.log(lttr)
//Slice
//use dto extrct part of array
//Array.slice(firstIndex,lastIndexexcluded)
//Return new Array extrcted element
let num=[3,5,7,2,4,1,8,6]
let slce=num.slice(1,4)
console.log(slce)

//Splice
//used to add new element in array
//Array.splice(index,deleteValue,valuetobeadded)
//Return deleted item in the form of array
let num1=[1,4,32,65,8,7,3,9,2,5]
let update=num1.splice(1,2,45)
console.log("Original Array: "+num1)
console.log("Updated Array: "+update)

//Working w Array
//at method
console.log("First Element " +num1[1])
console.log("last element is array " +num1[num1.length-1])//last element
console.log("Element using minus: "+num1.slice(-2)[0])//array -1 helps to return last value of the array -1 return value in array to nrml value without array [0] 
console.log("using at method: " +num1.at(-2))//at Method
//at method also works for string also
let names1="arfeen"
console.log("String : "+names1[0])
console.log("String using at: "+names1.at(0))
console.log("String using at for last: "+names1.at(-1))

//Array Methods
//Map
//Create New array from original array By applying
//Transformation funtion
let salaries=[3000,5000,8000,9000,6000]
let newSalary=salaries.map(salary =>{
let increamntsalary=salaries/2
return salary+increamntsalary
})
console.log("Salaries ",salaries)
console.log("New salary ",newSalary)

//Array Method
//Filter Method(Used to perform filteration)
let gifts=["watch","shoes","Shirt","ring"]
let filterElemnt=gifts.filter(gift=>{
    if(gift=="watch"||gift=="ring"){
        return gift
    }
})
console.log(gifts)
console.log("New gift ",filterElemnt)

// Array Method
//reduce method
//run reducer function for each element
//Array.reduce(function(ttl,currentvalue),initialValue)
//It return singl value
//Sum of all element using reduce method
let sum=[2,3,6,7,8]
let reducemeth=sum.reduce(function(total,currentvalue){
    return total+currentvalue;
},0)
console.log(reducemeth)
console.log("original array ",sum)

//"find" method 
//it return first elemnt we r lookin for..
let objs=[{id:1,name1:"Arfeen"},{id:2,name1:"Ayaan"}]
let res1=objs.find(obj=>{
    return objs.id=1;
})
console.log(res1)