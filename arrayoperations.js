const numarr=[2,7,8,9,12]
console.log(numarr)
const numarr1=new Array()
numarr1.push(2)
numarr1.push(5)
numarr1.push(7)
numarr1.push(9)
numarr1.push(12)
console.log("Num Array from constructor=",numarr1)
const numarr2=new Array(5,7,9)
console.log("Num Array from parameter constructor",numarr2)
const numarr3=new Array(2)
numarr3.push(5)
numarr3.push(9)
numarr3.push(12)
numarr3.push(15)
numarr3.push(18)
console.log("Num Array from parameter arrLength constructor",numarr3)
console.log("Extracting Characters from  Array")
s=Array.from('raju')
console.log(s)
s=Array.of('e123',"rajesh",21,67.8)//Supports mixed data type
console.log(s)
//accessing through Iterator
const iterator1 = numarr1[Symbol.iterator]();
for(const i of iterator1)
    console.log(i)
console.log("concatation=",numarr1.concat(numarr2))
console.log("concat three arrays=",numarr1.concat(numarr2,numarr3))
//Copy to index 2, all elements from index 0:
const fruits = ["Banana", "Orange", "Apple", "Mango","Grapes"];
console.log(fruits.copyWithin(2,0))
//Copy to index 2, the elements from index 0 to 2
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Grapes"];
console.log(fruits1.copyWithin(2, 1, 3))
const list=fruits.entries()
var i=0
for(let f of list) 
    console.log("fruit",f)
const isVoter = (currentValue) => currentValue >=18;
console.log(numarr1.every(isVoter));
// Fill with 0 from position 2 until position 4
console.log(numarr1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
console.log(numarr1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
console.log(numarr1.fill(6));
let a=[2,7,9,12,8,18,17]
function isEven(num) {
    if (num%2 === 0) {
        return true;
      }
  }
  
console.log("Filter=",a.filter(isEven)); 
console.log("Find=",a.find((x)=>x<10))
console.log("Find Index=",a.findIndex((x)=>x<10))
let earray={
    firstName: "Mahesh",
    lastName: "Rajesh",
    age: 22,
    company: "Artifixel"
  };
console.log(Object.keys(earray))    
console.log(Object.values(earray))         
const map1 = a.map((x) => Math.pow(x,3));
console.log(map1);
console.log(a.sort())
const odd=(ele)=>ele%2!=0
console.log("At least one element=",a.some(odd))
let a1=[12,5,7,19,23,17,18]
console.log("Reversed Items=",a1.toReversed())