//1- Write a js program to convert lowercase string to uppercase.


// let a = prompt("Enter a string");
// let str = a.toUpperCase();
// console.log(str);

//2- Write a js program to convert uppercase string to lowercase.

// let a = prompt("Enter a String")
// let str =a.toLowerCase()
// console.log(str)

// 3- Write a js program to toggle case of each character of a string

// function swap(str) {
//     let newLetters = '';
//     for (let i = 0; i < str.length; i++) {
//           if (str[i] == str[i].toUpperCase()) {
//              newLetters += str[i].toLowerCase();
//         } else {
//             newLetters += str[i].toUpperCase();
//             }
//         }
//         // console.log(newLetters);
//         return newLetters;
//     }
//     console.log(swap('hassan farooq'));

// 4- Write a js program to count total number of words in a string.

// let str =prompt('Enter a String!');
// let result = str.split(' ').length;
// console.log(result);

// 5-  Write a JavaScript program to list the properties of a JavaScript object

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };
    
// console.log(student.name)
// console.log(student.sclass)
// console.log(student.rollno)

// 6-  Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };
    
// console.log("Before the student",student);

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };
// delete student.rollno;
// console.log("After the student",student);

// 7-  Write a JavaScript program to get the length of a JavaScript object.   

// var student = {
//     name : "Hassan",
//     sclass : "VI",
//     rollno : 12,
//      age : 23 
// };

// let leng = Object.keys(student).length   
// console.log(`This Object lenght Is ${leng}`);

// 8-  Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//     {
//       author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//    readingStatus: false
//     }];

//     let find = library[1]
//     console.log(find);

// 9-   Write a js program to print all odd number between 1 to 100.

// for (var i = 1; i < 100; i += 2) {
//     console.log(i);
// }

// 10-  Write a js program to find sum of all natural numbers between 1 to n.

// function numSum(n){
//     var sum = 0;
//       for(i = 0; i <= n; i++){
//         sum += i; 
//          }
//     console.log(sum)
//          }
//      numSum(20);

// 11-  Write a js program to find sum of all even numbers between 1 to n.

// let a = prompt('Enter a first Number')
// let b = prompt('Enter a second Number')
// for(let i = a; i <= b; i++){
//   if (i%2 === 0){
//   console.log('show even number between first and second number')
//   }
// }

// 12- Write a js program to find sum of all odd numbers between 1 to n.

// let a = prompt('Enter a first Number')
// let b = prompt('Enter a second Number')
// for(let i = a; i <= b; i++){
//   if (i%2 === 1){
//   console.log('show odd number between first and second number')
//   }
// }

// 13-  Write a js program to print multiplication table of any number.

// const table= prompt('Enter Table Number')
// const len= prompt('Enter Table lenght')
// for(c=1;c<=len;c++){
//     console.log(`${table} * ${c} = ${table*c}`)
// }

// 14- Write a js program to count number of digits in a number.

// function digits_count(n) {
//     var count = 0;
//     if (n >= 1) ++count;
  
//     while (n / 10 >= 1) {
//       n /= 10;
//       ++count;
//     }
  
//     return count;
//   }
  
//   console.log(digits_count(12112));

// 15- Write a js program to find maximum between two numbers.

// let a = prompt('enter a first number')
// let b = prompt('enter a second number')

// if(a>b){
//     console.log(`a is a max numer ${a}`)
// }else{
//     console.log(`b is a max number ${b}`)
// }

// 16- Write a js program to find maximum between three numbers

// var a = 25
// var b = 110
// var c = 15

// if(a>b || a>c){
//     console.log("a is big")
// }else if(b>a && b>c){
//     console.log("b is big number")

// } else {
//     console.log("c is a big num")
// }

// 17-  Write a js program to check whether a number is negative, positive or zero.

//  let num = prompt('Enter a number')

// if (num > 0){
//     console.log("number is postive")
// }else if(num <0){
//     console.log("number is negtive")
// }else if(num == 0){
//     console.log("number equal zero")
// }else{
//     console.log(alert("enter a number"))
// }

// 18-  Write a js program to check whether a number is even or odd.

// let num = prompt("Enter a Number")
// if(num% 2 ==0){
//     console.log('Number is a even')
// }else{
//     console.log('Number is a odd')
// }

// 19-  WWrite a js program to check whether a year is leap year or not.

// let y = prompt('Enter a Year')
// if(y % 4 == 0){
//     console.log('leep Year ')
// }else{
//     console.log('Not a leep year')
// }

// 20-  Write a js program to check whether a character is alphabet or not.

// let chr = prompt('Enter a character ')
// if((chr>= 'A')&&(chr <='Z')||(chr>= 'a')&&(chr<='z')){
//     console.log(`${chr} is a character `)
// }else{
//     console.log(`is not a character `)
// }

// 21-  Write a js program to input any alphabet and check whether it is vowel or consonant.

// let ch = prompt("Enter a alphabet")

// if((ch == 'a' || ch == 'A')||(ch == 'e' || ch == 'E')||(ch == 'i'|| ch=='I')||(ch == 'o'|| ch=='O')||(ch == 'u'|| ch == 'U')){
//     console.log("is a vowel")
// }else{
//  console.log("is a consonant")
// }

// 22-  Write a js program to input any character and check whether it is alphabet, digit or special 

// let chr =prompt("Enter a character")

// if((chr>='A')&& (chr<='Z')||(chr>='a')&&(chr<='z')){
//     console.log("is a chracter")
// }else if((chr>='0')&&(chr<='9')){
//     console.log("is a number")
// }else{
//     console.log("is a symbel")
// }

// 23-  Write a js program to find cube of any number using function.

// var num = Math.pow(4, 2);
// console.log(num);

// 24- Write a js program to find maximum and minimum between two numbers using functions.

// function maxNum(x,y){
//     if(x>y){
//         console.log('x is a max')
//     }else{
//         console.log('y is a max')
//     }

// }
// console.log(maxNum(12,5))

// 25- Write a js program to check whether a number is even or odd using functions.

// function myFun(x){
//     if(x%2==0){
//         console.log('number is even')
//     }else{
//         console.log('number is odd')
//     }
// }
// myFun(7);

// 26- Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// function findNum(sum,num){
   
//     if(sum===num){
//         console.log('number is a Armstrong')
//     }else{
//         console.log('number is a not armstrong')
//     }
// }

// findNum(92727)

// 27- Write a js program to find maximum between two numbers using conditional operator.
// let a = prompt('Enter a first number')
// let b =prompt('Enter a second number')
// if(a>b){
//     console.log(`${a} is a max number`)
// }else{
//     console.log(`${b} is a max number`)
// }

// 28- Write a js program to find maximum between three numbers using conditional operator.
// var a = 25
// var b = 110
// var c = 15

// if(a>b && a>c){
//     console.log(`${a}  is a max num`)
// }else if(b>a && b>c){
//     console.log(`${b}  is a max num`)

// } else {
//     console.log(`${c}  is a max num`)
// }

// 29-  Write a js program to check whether a number is even or odd using conditional operator.

// let num = prompt('Enter a number')

// if(num % 2 ==0){
//     console.log(`${num} is a even number`)
// }else{
//     console.log(`${num} is a odd number`)
// }

// 30- Write a js program to check whether year is leap year or not using conditional operator.

// let y = prompt('Enter a Year')
// if(y % 4 == 0){
//     console.log(`${y} is a leep year`)
// }else{
//     console.log(`${y } is not a leep year`)
// }

// 31- Write a js program to check whether character is an alphabet or not using conditional operator.

// let chr = prompt('Enter a alphabet')

// if((chr>='A')&&( chr<='Z')||(chr>='a')&&( chr<='z')){
//     console.log(`${chr} is a alphabet`)
// }else{
//     console.log(`${chr} is a character`)
// }

// 32- Write a js program to print day of week name using switch case.


// switch (2) {
//     case 1:
//         console.log("monday");
//         break;
//         case 2:
//             console.log("tuesday");
//             break;
//             case 3:
//                 console.log("wensday");
//                 break;
//                 case 4:
//                     console.log("thursday");
//                     break;
//                     case 5:
//                         console.log("friday");
//                         break;
//                         case 6:
//                             console.log("saturday");
//                             break;
//                             case 7:
//                                 console.log("sunday");
//                                 break;

//     default:
//       console.log ("invalid number");
//         break;
// }

// 33-  Write a js program print total number of days in a month using switch case.

// var year = 2016;
// var month = 12;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }

// console.log(dayCount);

// 34- Write a js program to check whether an alphabet is vowel or consonant using switch case.


// let ch = prompt('Enter a alphabet');
// switch (ch) {
//     case 'a':
//         case 'e':
//             case 'i':
//                 case 'o':
//                     case 'u':
//                         case 'a':
//         case 'A':
//             case 'E':
//                 case 'I':
//                     case 'O':
//                         case 'U':
//                         console.log(`${ch} is a vowel`)
//         break;

//     default:
//         console.log(`${ch} is a consonant`)
//         break;
// }

// 35-  Write a js program to find maximum between two numbers using switch case.

// let num1 = prompt('Enter a First Number')
// let num2 =prompt('Enter a Second Number')

// switch (num1 > num2 ) {
//     case true:
//         console.log(`${num1} is a max Number`)
        
//         break;
//         case false:
//             console.log(`${num2} is a max number`)
//             break;

//     default:
//         break;
// }

// 36-  Write a js program to check whether a number is even or odd using switch case

// let num = prompt('Enter a number')

// switch (num %2 ==0) {
//     case true:
//         console.log(`${num} is a even`)
        
//         break;
//         case false:
//             console.log(`${num} is a odd`)

//     default:
        
        
//         break;
// }

// 37-  Write a js program to check whether a number is positive, negative or zero using switch case.

// let num = prompt('Enter a number')

// switch (num) {
//     case (num>0):
//         console.log(`${num} is a positive number`)
//         break;
//         case (num == 0):
//             console.log(`${num} is a zero number`)
//             break;
//             case (num < 0):
//                 console.log(`${num} is a negative number`)
//                 break;
//     default:
//         break;
// }

// 38-  Write a js program to copy all elements from an array to another array.

// var array1 = ['a', 'b', 'c', 'd', 'e'];
// var array2 = ['b', 'd', 'f'];

// array1 = array1.filter(function(item) {
//   return !array2.includes(item); 
// })
// console.log(array1); 
// console.log(array2); 

// 39-  Write a js program to insert an element in an array.

// let arr =[1,2,3,4]
// console.log(` before ${arr}`)
//  arr.push(5)
// console.log(`after ${arr}`)

// 40-  Write a js program to delete an element from an array at specified position.

// let arry =[1,2,3,4,5]
// console.log(`Before ${arry}`)
// arry.splice(1,2)
// console.log(`After ${arry}`)

// 41-  Write a js program to merge two array to third array.

// let arry1 =[1,2,3,4,5]
// let arry2=[6,7,8,9,10]

// let array= arry1.concat(arry2)
// console.log(array)

// 42- Write a js program to delete all duplicate elements from an array.

// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);