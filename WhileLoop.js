//Print power series of 2 till 256 or given num
function getPowerSeries(n){
    let prod = 1;
    let count=0;
    while (prod <= 256 && count<=n) {
        console.log("2^"+count+"="+prod);
        prod =prod*2;
        count++;
    }
}
getPowerSeries(4);
getPowerSeries(7);
getPowerSeries(14);

/* 
Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached.. 
*/
let max=100;
let min=1;
let num=Math.floor(Math.random()*100)+1;
console.log("Generated number: "+num);
let mid=50;
do{
    mid=Math.floor(((min+max)/2));
    if(num<mid){
        max=mid;
        console.log(num+" is less than "+mid);
    }else if(num>mid){
        min=mid;
        console.log(num+" is more than "+mid);
    }
}while(num!=mid);
console.log("Found "+mid);

//Coin flip till one appears 9 times
let headCount=0;
let tailCount=0;
do{
    let coin=Math.floor(Math.random()*10) % 2;
    if(coin==0) headCount++;
    else tailCount++;
}while(headCount<11 && tailCount<11);
console.log(headCount>tailCount?"Heads Win":"Tails Win");
console.log("No of heads= "+headCount);
console.log("No of tails= "+tailCount);

//Gambling Problem
let money=100;
let betsPlaced=0;
let winCount=0;
do{
    betsPlaced++;
    let bet=Math.floor(Math.random()*10) % 2;
    if (bet==1){
        money++; winCount++;
    }else{
        money--;
    }
}while(money>0 && money<200);
console.log("You have Rs "+money+" in the end");
console.log("You won "+winCount+" out of "+betsPlaced+" bets");
