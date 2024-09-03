
// let inputChar:string = "Roshan"

// console.log(inputChar);

// let number1:number = 12;
// let number2:number = 15;

// let sum:number = number1 + number2

// console.log(sum);


// let P:number = 30_000;
// let R:number = 10;
// let n:number = 5;

// let SI:number = ((P*R*n)/100);

// console.log(SI);



// let marks:number = 59;

// if(marks>=50 && marks<=100){
//     console.log("student passed");
// }else if(marks>0 && marks<50){
//     console.log("student failed");   
// }


// let marks: number = 69;
// switch(true){
//     case (marks>90 && marks <=100): {
//         console.log("Grade is A");
//         break;
//     }
//     case (marks>80 && marks <91): {
//         console.log("Grade is B");
//         break;
//     }
// case (marks>70 && marks <81): {
//         console.log("Grade is C");
//         break;
//     }
//     case (marks>60 && marks <71): {
//         console.log("Grade is D");
//         break;
//     }
//     case (marks>=50 && marks <61): {
//         console.log("Grade is E");
//         break;
//     }
//     case (marks<50):{
//         console.log("Failed");
//         break;
//     }
//     default: console.log("Invalid marks entered");
// }


// let day: number = 4;
// switch(day){
//     case 1: {
//         console.log("Sunday");
//         break;
//     }
//     case 2: {
//         console.log("Monday");
//         break;
//     }
//     case 3: {
//         console.log("Tuesday");
//         break;
//     }
//     case 4: {
//         console.log("Wednesday");
//         break;
//     }
//      case 5: {
//         console.log("Thursday");
//         break;
//     }
//     case 6: {
//         console.log("Friday");
//         break;
//     }
//     case 7: {
//         console.log("Saturday");
//         break;
//     }
    
//     default: console.log("Invalid number");
// }


// let num:number = 5;

// for(let i:number =1;i<11;i++){

//     console.log(i,"*",num,'=',num*i)

// }


// const limit:number = 14;
// let sum:number=0;
// for(let i:number=1;i<=limit;i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }
// console.log("sum of odd number upto limit is:", sum);



// for(let i:number=1;i<=5;i++){
//     let str:string='';
//     for(let j:number=1;j<=i;j++){
//         str=str+' '+ j;
//     }
//     console.log(str);
// }


// let array1:number[]=[1,2,3,4,5];
// let array2:number[]=[6,7,8,9,10];

// for(let i:number=0;i<array1.length;i++){
//     let temp:number=array1[i];
//     array1[i]=array2[i];
//     array2[i]=temp;
// }

// console.log("array1 is:", array1);
// console.log("array2 is:", array2);

// let array:number[]=[7,36,14,8,18];
// let count:number=0;
// for(let i:number=0;i<array.length;i++){
//     if(array[i]%2==0){
//             count+=1;
//     }
// }
// console.log("Total even number is:", count);


    // let array:number[]=[8,4,12,3,15];

    // function bubbleSort(array:number[]):number[]{
    // let count:number=1;
    // do{
    //     count=0;
    //     for(let i:number=1;i<array.length;i++){
    //         if(array[i]<array[i-1]){
    //             let temp:number = array[i];
    //             array[i]=array[i-1];
    //             array[i-1]=temp;
    //             count=1;
    //         }
    //     }
    // }
    // while(count){
    //     return array;
    // }
    // }

    // console.log(bubbleSort(array));



    // let names: string = 'MALAYALAM';
    // let left: number = 0;
    // let right: number = names.length - 1;
    
    // function palindrome(names: string, left: number, right: number): string {
    //     if (names[left] !== names[right]) {
    //         return 'not palindrome';
    //     }
    //     if (left >= right) {
    //         return 'palindrome';
    //     }
    //     return palindrome(names, left + 1, right - 1);
    // }
    
    // console.log(palindrome(names, left, right));
    
    // let limit : number = 3
    // let array1:number[][] = [[1,2,3],[4,5,6],[7,8,9]] ;

    // let array2:number[][] = [[9,8,7],[6,5,4],[3,2,1]] ;

    // let sum:number[][] = [];

    // for (let i:number = 0; i < limit; i++){
    //     sum[i] = [];
    //     for (let j:number = 0; j < limit; j++){
    //         sum[i][j] = array1[i][j] + array2[i][j];
    //     }
    // }

    // console.log(sum);
    

    // function getArray():number[]{
    //     const prompt = require('prompt-sync')();
    //     const arraySize=parseInt(prompt("enter array size: "),10);
    //     const array:number[]=[];
    
    // for (let i:number = 0; i < arraySize; i++) {
    //     const element = parseInt(prompt(`Enter element ${i + 1}: `), 10);
    //     array.push(element);
    //   }
    
    //   return array;
    // }
    // function displayArray(arr: number[]): void {
    //   console.log('Array values are:');
    //   arr.forEach((value, index) => {
    //     console.log(`Element ${index + 1}: ${value}`);
    //   });
    // }
    
    
    // function main(): void {
    //   let myArray: number[];
    
    //   myArray = getArray();
    //   displayArray(myArray);
    // }
    
    // main();
    


// let value:number = 7;

// function isPrime(value:number):boolean{
//     let count:number=0;
// for(let i:number=2;i<value;i++){
//     if(value%i===0){
//         count+=1;
//     }
// }
// return count>0?false:true;
// }

// console.log(isPrime(value));




// Define a class with methods for basic operations
// class Calculator {
//     addition(a: number, b: number): number {
//         return a + b;
//     }

//     subtraction(a: number, b: number): number {
//         return a - b;
//     }

//     multiplication(a: number, b: number): number {
//         return a * b;
//     }

//     division(a: number, b: number): number {
//         if (b === 0) {
//             console.log("Cannot divide by zero");
//             return NaN;
//         }
//         return a / b;
//     }
// }

// const calculator = new Calculator();

// function main() {
//     const prompt = require('prompt-sync')();
//     console.log("Choose an operation:");
//     console.log("1. Addition");
//     console.log("2. Subtraction");
//     console.log("3. Multiplication");
//     console.log("4. Division");

//     const choice: number = parseInt(prompt("Enter your choice (1-4): "));
//     const num1: number = parseFloat(prompt("Enter the first number: "));
//     const num2: number = parseFloat(prompt("Enter the second number: "));

//     let result: number;

//     switch (choice) {
//         case 1:
//             result = calculator.addition(num1, num2);
//             console.log(`Result: ${num1} + ${num2} = ${result}`);
//             break;
//         case 2:
//             result = calculator.subtraction(num1, num2);
//             console.log(`Result: ${num1} - ${num2} = ${result}`);
//             break;
//         case 3:
//             result = calculator.multiplication(num1, num2);
//             console.log(`Result: ${num1} * ${num2} = ${result}`);
//             break;
//         case 4:
//             result = calculator.division(num1, num2);
//             if (!isNaN(result)) {
//                 console.log(`Result: ${num1} / ${num2} = ${result}`);
//             }
//             break;
//         default:
//             console.log("Invalid choice. Please enter a number between 1 and 4.");
//     }
// }

// main();




// const prompt = require('prompt-sync')(); 

// const test: number = parseFloat(prompt("Enter marks in written exam:") || '');
// const lab: number = parseFloat(prompt("Enter marks in lab exam:")|| '');
// const assignment: number = parseFloat(prompt("Enter marks from assignment:")|| '');

// const grade:number = (test*70)/100 + (lab*20)/100 + (assignment*10)/100;

// console.log("Student Grade is ", grade);



// const prompt = require('prompt-sync')(); 
// const income: number = parseInt(prompt("Enter your annual income:") || '');
// let tax:number;
// switch(true){
//     case (income<=250000): {
//         console.log("No tax");
//         break;
//     }
//     case (income>250000 && income<500000): {
//         tax=(income*5)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
//     case (income>500000 && income<1000000): {
//         tax=(income*20)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
//     case (income>1000000 && income<5000000): {
//         tax=(income*30)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
// }




// let k:number=1;
// let str:string='';
// for(let i:number=0;i<4;i++){
//     for(let j:number=0;j<4;j++){
//         if(j<=i){
//             str+= `${k} `;
//             k++;
//         }
//         else{
//            str+=" "; 
//         }
//     }
//     str+='\n';
    
// }
// console.log(str);





// const prompt = require('prompt-sync')(); 

// const limit: number = parseInt(prompt("Enter array limit:") || '');
// let array:number[]=[];
// let result:number[]=[];

// for(let i:number=0;i<limit;i++){
//     const value:number=parseInt(prompt("Enter array value "+i+":" ));
//     array.push(value);
// }

// for(let i:number=1;i<limit;i++){
//     result.push(array[i]*array[i-1])
// }

// console.log("Resultant array is: ",result);




// const prompt = require('prompt-sync')();

// function getArray(size: number): number[][] {
//     let array: number[][] = [];
//     for (let i = 0; i < size; i++) {
//         array[i] = [];
//         for (let j = 0; j < size; j++) {
//             array[i][j] = parseInt(prompt(`Enter value for element [${i}][${j}]: `));
//         }
//     }
//     return array;
// }

// function addArray(array1: number[][], array2: number[][], size: number): number[][] {
//     let sumArray: number[][] = [];
//     for (let i = 0; i < size; i++) {
//         sumArray[i] = [];
//         for (let j = 0; j < size; j++) {
//             sumArray[i][j] = array1[i][j] + array2[i][j];
//         }
//     }
//     return sumArray;
// }

// function displayArray(array: number[][]) {
//     console.log("Sum of array 1 and array 2:");
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i].join("\t"));
//     }
// }

// function main() {
//     const size: number = parseInt(prompt("Enter the size of the array: "));

//     console.log("Enter the values of array 1:");
//     let array1 = getArray(size);

//     console.log("Enter the values of array 2:");
//     let array2 = getArray(size);

//     let sumArray = addArray(array1, array2, size);

//     displayArray(sumArray);
// }

// main();






// const prompt = require('prompt-sync')();

// class Array2D {
//     private array: number[][] = [];

    
//     getArray(size: number): void {
//         for (let i = 0; i < size; i++) {
//             this.array[i] = [];
//             for (let j = 0; j < size; j++) {
//                 this.array[i][j] = parseInt(prompt(`Enter value for element [${i}][${j}]: `));
//             }
//         }
//     }

    
//     displayArray(): void {
//         console.log("Array elements are:");
//         for (let i = 0; i < this.array.length; i++) {
//             console.log(this.array[i].join("\t"));
//         }
//     }
// }

// // Main function
// function main() {
//     const size: number = parseInt(prompt("Enter the size of the array: "));
//     let array2D = new Array2D(); 

//     array2D.getArray(size); 
//     array2D.displayArray(); 
// }


// main();




// const prompt = require('prompt-sync')();

// function calculateCircleArea(radius: number): number {
//     return 3.1416 * radius * radius;
// }

// function calculateSquareArea(side: number): number {
//     return side * side;
// }

// function calculateRectangleArea(length: number, width: number): number {
//     return length * width;
// }

// function calculateTriangleArea(base: number, height: number): number {
//     return 0.5 * base * height;
// }

// function main() {
//     console.log("Enter your choice:");
//     console.log("1. Circle");
//     console.log("2. Square");
//     console.log("3. Rectangle");
//     console.log("4. Triangle");

//     const choice: number = parseInt(prompt("Choice: "));

//     switch (choice) {
//         case 1:
//             const radius = parseFloat(prompt("Enter the radius: "));
//             console.log(`Area of the circle is: ${calculateCircleArea(radius).toFixed(2)}`);
//             break;
//         case 2:
//             const side = parseFloat(prompt("Enter the length: "));
//             console.log(`Area of the square is: ${calculateSquareArea(side)}`);
//             break;
//         case 3:
//             const length = parseFloat(prompt("Enter the length: "));
//             const width = parseFloat(prompt("Enter the width: "));
//             console.log(`Area of the rectangle is: ${calculateRectangleArea(length, width)}`);
//             break;
//         case 4:
//             const base = parseFloat(prompt("Enter the base: "));
//             const height = parseFloat(prompt("Enter the height: "));
//             console.log(`Area of the triangle is: ${calculateTriangleArea(base, height)}`);
//             break;
//         default:
//             console.log("Invalid choice.");
//     }
// }
// main();






//26

// function reverse(my_string: string):void{
//     try{
//         const reverse_string: string = my_string.split('').reverse().join('');
//         console.log("reverse string:",reverse_string);
//         console.log("type-->",typeof reverse_string);   
//     }catch(error){
//         console.log(error);
        
//     }
// }

// reverse("Roshan");



// const prompt=require('prompt-sync')();
// let my_height:number=parseInt(prompt("Enter your height :"));
// function checkisNan(my_height: number):void{
// try{
//     if(isNaN(my_height)){
//         throw("NotaNumberError");
//     }else if(my_height>200){
//         throw("hugeHeightError");
//     }else if(my_height<40){
//         throw("tinyHeightError");
//     }else{
//         console.log("valid height entered.");
        
//     }
// }catch(error){
//     console.log(error);
// }

// }
 
// checkisNan(my_height);


// class Car{
//     name: string;
//     mileage:number;
//     max_speed:number
//     constructor(name:string,mileage:number,max_speed:number){
//         this.name=name;
//         this.mileage=mileage;
//         this.max_speed=max_speed;
//     }
// }

// const myClass = new Car('polo',16,160);
// console.log(myClass.name);
// console.log(myClass.mileage);
// console.log(myClass.max_speed);


// Define the myFilter function
// function myFilter(myArray: number[], callback: (num: number) => boolean): number {

//     const sum = myArray.reduce((acc, num) => acc + num, 0);

//     callback(sum);

//     return sum;
// }

// function checkEvenOdd(num: number): boolean {
//     if (num % 2 === 0) {
//         console.log("The sum is even.");
//         return true;
//     } else {
//         console.log("The sum is odd.");
//         return false;
//     }
// }

// const myArray = [1, 2, 3, 4, 5];
// const result = myFilter(myArray, checkEvenOdd);
// console.log("Sum of the array:", result); 
// ; 

