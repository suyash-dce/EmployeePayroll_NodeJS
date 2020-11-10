//Read 5 random 3 digit no and shows max and min
let max=Math.floor(Math.random() * 100);
let min=max
for(a=1;a<=5;a++){
    let a=Math.floor(Math.random() * 1000);
    if(a>max){
        max=a;
    }
    if(a<min){
        min=a;
    }
}
console.log("Max: "+max);
console.log("Min: "+min);

//Date between March 20 and June 20
function dateCheck(date){
    if (date>=new Date("March 20") && date<=new Date("June 20")){
        console.log("True");
    }else{
        console.log("False");
    }
}
dateCheck(new Date("October 11"));
dateCheck(new Date("May 5"));

//Leap Year Checker
function yearCheck(year){
    if(year>999 && year<10000){
        if(year%4 ==0 && year%100 != 0){
            console.log(year+" is a leap year.");
        }else if (year%4 ==0 && year % 100 == 0 && year%400 ==0){
            console.log(year+" is a leap year.");
        }else{
            console.log(year+" is NOT a leap year.");
        }
    }else{
        console.log(year+" is NOT a year");
    }
}
yearCheck("2020");
yearCheck("2021");
yearCheck("20200");

//Coin Flip
let coin=Math.floor(Math.random()*10) % 2;;
if(coin==0) console.log("Heads");
else console.log("Tails");
