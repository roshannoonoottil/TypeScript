
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
    


let value:number = 7;

function isPrime(value:number):boolean{
    let count:number=0;
for(let i:number=2;i<value;i++){
    if(value%i===0){
        count+=1;
    }
}
return count>0?false:true;
}

console.log(isPrime(value));

