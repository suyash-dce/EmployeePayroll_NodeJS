//a. Generates 10 Random 3 Digit number.
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let numArray=new Array();
for (var i=1;i<=10;i++){
    let random=(Math.floor(Math.random() * 900)+100);
    numArray.push(random);
}
console.log("Selected Array= ");
console.log(numArray);
let firstLargest=numArray[0];
let secondLargest=numArray[0];
let firstSmallest=numArray[0];
let secondSmallest=numArray[0];
for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = numArray[i];
    }else if (numArray[i] > firstLargest && numArray[i] != firstLargest) {
        secondLargest = numArray[i];
    }
    if (numArray[i] < firstSmallest) {
        secondSmallest = firstSmallest;
        firstSmallest = numArray[i];
    } else if (numArray[i] < secondSmallest && numArray[i] != firstSmallest) {
        secondSmallest = numArray[i];
    }
}
console.log("Second Largest Element: "+secondLargest);
console.log("Second Smallest Element: "+secondSmallest);

//Extend the above program to sort the array
numArray.sort();
console.log("Array is now sorted.");
console.log("Second Largest Element: "+numArray[8]);
console.log("Second Smallest Element: "+numArray[1]);

//Extend the Prime Factorization Program to store all the Prime Factors of a
//number n into an array and finally display the output.
function getPrimeFactors(num) {
    let number=num;
    let factors=new Array();
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            factors.push(i);
            num = num / i;
        }
    }
    console.log("The Prime Factors of "+number+" are:");
    console.log(factors);
}
getPrimeFactors(5);
getPrimeFactors(9);
getPrimeFactors(14);

//Write a Program to show Sum of three Integer adds to ZERO
let intArray=[1,2,-5,4,3,-3];
let triplet=new Array();
let output=new Array();
for(var x=0;x<intArray.length;x++){
    for(var y=x;y<intArray.length;y++){
        for(var z=y;z<intArray.length;z++){
            if(intArray[x]+intArray[y]+intArray[z]==0){
                triplet.push(intArray[x],intArray[y],intArray[z]);
                output.push(triplet);
                triplet = [];
            }
        }
    }
}
console.log("The triplets are: ");
console.log(output);

//Digits Repeated Twice in 0-100
function checkPalindrome(num){
    let revDigits=0;
    let number=num;
    while(num>0){
        let digit = num%10;
        revDigits = revDigits*10 +digit;
        num=Math.floor(num/10);
    }
    if(revDigits == number) return true;
    else return false;
}

let newArray=new Array();
for(var i = 10; i <= 100; i++){
    if(checkPalindrome(i)) newArray.push(i);
}
console.log("The Repeated digits between 0-100 are: ");
console.log(newArray);
