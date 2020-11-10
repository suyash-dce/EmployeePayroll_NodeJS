//Print single digit number in words
function numCheck(num){
    if(num == 1) console.log("ONE");
    else if(num == 2) console.log("TWO");
    else if(num == 3) console.log("THREE");
    else if(num == 4) console.log("FOUR");
    else if(num == 5) console.log("FIVE");
    else if(num == 6) console.log("SIX");
    else if(num == 7) console.log("SEVEN");
    else if(num == 8) console.log("EIGHT");
    else if(num == 9) console.log("NINE");
    else console.log("Invalid Number");
}
numCheck(4);
numCheck(8);
numCheck(141);
numCheck('L');

//Read Number To Print Day of the Week
function weekCheck(day){
    if(day == 1) console.log("Sunday");
    else if(day == 2) console.log("Monday");
    else if(day == 3) console.log("Tuesday");
    else if(day == 4) console.log("Wednesday");
    else if(day == 5) console.log("Thursday");
    else if(day == 6) console.log("Friday");
    else if (day == 7) console.log("Saturday");
    else console.log("Invalid Number");
}
weekCheck(4);
weekCheck(5);
weekCheck(15);
weekCheck('L');

//Read 1,10,100,1000,10000 and print in words
function unitCheck(num){
    if(num == 1) console.log("Unit");
    else if(num == 10) console.log("Ten");
    else if(num == 100) console.log("Hundred");
    else if(num == 1000) console.log("Thousand");
    else if(num == 10000) console.log("Ten Thousand");
    else console.log("Invalid Number");
}
unitCheck(1);
unitCheck(100);
unitCheck(999);
unitCheck(10000);

//Enter 3 numbers and find max and min from operations
function maxMinOperations(a,b,c){
    let value1 = a+b*c;
    let value2 = a%b+c;
    let value3 = c+a/b;
    let value4 = a*b+c;
    let max = Math.max(value1,value2,value3,value4);
    let min = Math.min(value1,value2,value3,value4);

    if(value1==max){
        console.log("Max: "+"a+b*c="+value1);
    }else if(value2==max){
        console.log("Max: "+"a%b+c="+value2);
    }else if(value3 == max){
        console.log("Max: "+"c+a/b="+value3);
    }else if(value4 == max){
        console.log("Max: "+"a*b+c="+value4);
    }

    if (value1 == min) {
        console.log("Min: "+"a+c*c="+value1);
    } else if (value2 == min) {
        console.log("Min: "+"a%b+c="+value2);
    } else if (value3 == min) {
        console.log("Min: "+"c+a/b="+value3);
    } else if (value4 == min) {
        console.log("Min: "+"a*b+c="+value4);
    }
}
maxMinOperations(1,2,3);
maxMinOperations(8,15,12);
maxMinOperations(0,19,12);
