// form practice

// let name = "";
// let email = "";
// let password = "";
// let contact = "";
// let gender = "";

// alert("Welcome");

// alert("Enter Your Username");
// name = prompt("please enter your name");

// alert("Enter Your email");
// email = prompt("please enter your email");

// alert("Enter Your password");
// password = prompt("please enter your password");

// alert("Enter Your contact number");
// contact = prompt("please enter your contact number");

// alert("Enter Your gender");
// gender = prompt("please enter your gender");

// console.table([name, email, password, contact, gender])


// math practice

// Q1

// let x = 25;
// let y = 5;
// let z = 2;

// let result;

// result = (x / y) + (y * z);
// console.log(result);

// // Q2

// let a = 50;
// let b = 80;
// let c = 10;

// let percent;

// percent = (a / b) * 100;
// percent = percent + (c / a) * 100;
// console.log(percent);

// // Q3

// let p = 12;
// let q = 4;
// let r = 8;

// let answer;

// answer = (p * r) / (q + r); // 8
// answer = answer + q / (p * r);
// console.log(answer);

// // Q4

// let num1 = 17;
// let num2 = 5;

// let modResult;

// modResult = num1 % num2;
// console.log(modResult);

// // Q5

// // Increment & Decrement

// let count = 10;

// count++;
// count--;
// count +=5;
// count -=2;

// console.log(count);

// learning ARREY

// const arr1 = [1, 2, 3, 4, 5];

// arr1.push(6); // using for add value
// arr1.push(7); // using for add value 
// arr1.pop();  // usind for remove last value 
// arr1.unshift("start") // add value in start
// arr1.shift() // remove value in start 

// console.log(arr1.includes(7)) // includes arrey me koi value find krny ke liye use hota hai  
                                 // , or iska answer true or false me ata hai

// console.log(arr1);

// const arr2 = ["hammad", "ismail", "tahir", "kashif", "rafey"]

// console.log(arr2.indexOf("tahir")) // indexof arrey me ksi value ki index yani ke wo name list me kis number pr hai 
                                   //  maloom krny ke liye use hota hai

// const newArr = arr2.join() // .join do arry ko merge krta hai or 1 ki type number or dosry ko string ati hai 

// console.log(typeof newArr)
// console.log(arr1)

// const newArry = ["Jan", "Fab", "March", "Aprail", "May"]


// console.log("A",newArry)

// const myn1 = newArry.slice(2, 4) // .slice ki help se 2 or 4 yani "fab" or "March" ko remove krdeta hai

// console.log(myn1)

// const newArry1 = ["Jan", "Fab", "March", "Aprail", "May", "June"]

// console.log("B",newArry1)

// const myn2 = newArry1.splice()

// console.log(myn2)

// const cars = ["corrolla" , "swift", "civic", ]
// const supercars = ["Supra", "Lamborghini", "BMW", "Audi" ]

// cars.push(supercars) // array me ksi value ko end me add krta hai or 1 new array craete krke deta hai 
                     // ye merge krny ke liye bh use hota hai

// console.log(cars)

// const allcars = cars.concat(supercars) // .concat 2 arrey ko properly merge krta hai

// console.log(allcars)

// const all_new_cars = [...cars, ...supercars] // this method called "spread" and also work same as ".concat"

// console.log(all_new_cars)

// const numberArray = [1, 2, 3,[4, 5, 6,], 7,[8, 8,[9 , 10]]]

// const numberArray1 = numberArray.flat(Infinity) // ".flat" array ke under agr array or humy usko 1 array bnana ho is liye use hota hai

// console.log(numberArray1);


// let score = 200
// let score1 = 400
// let score2 = 800 

// console.log(Array.of(score, score1, score2)) // ".of" & ".form" convert variable into array

// Assigment

// Q-1

const arry1 = [1, 2, 3, 4];

let sum = 0

for (i = 0; i < arry1.length; i++) {
    sum = sum + arry1[i]
}

// console.log("sum" , sum);

// Q-2

const arry2 = [4, 9, 2, 7]

const max = Math.max(4, 9, 2, 7)
const min = Math.min(4, 9, 2, 7)

// console.log("Maximum", max);
// console.log("MInimum",min);

// Q-3

const arry3 = [1, 2, 3, 4, 5]

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arry3.length; i++) {
    if (arry3[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // console.log("Even numbers:", evenCount);
  // console.log("Odd numbers:", oddCount);
    

// Loop 


// for (let i = 0; i < 10; i++ ){
//     console.log("sadiq")
// }

// reverse loop

// for (let a = 10; a >= 1; a--) {
//     console.log(a);
    
// }


// object

const user001 = {
  name: "Sadiq",
  fatherName: "Hussain",
  Gender:"Male",
  Number: "12345678910"


}

// console.log(user001.Number) // object me value access krny ka tariqa! 
// console.log(user001["name"]) // object me value access krny ka tariqa!


user001.country = "Pakistan"; // object me value add krny ka tariqa!

delete user001.Number; // object se value delete krny ka tariqa!

// console.log(user001)