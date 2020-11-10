//Print single digit number in words
function numCheck(num){
    switch(num){
        case 1: console.log("ONE"); break;
        case 2: console.log("TWO"); break;
        case 3: console.log("THREE"); break;
        case 4: console.log("FOUR"); break;
        case 5: console.log("FIVE"); break;
        case 6: console.log("SIX"); break;
        case 7: console.log("SEVEN"); break;
        case 8: console.log("EIGHT"); break;
        case 9: console.log("NINE"); break;
        default: console.log("Invalid Number");
    }
}
numCheck(4);
numCheck(8);
numCheck(141);
numCheck('L');

//Read Number To Print Day of the Week
function weekCheck(day){
    switch(day){
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Invalid Number");
    }
}
weekCheck(4);
weekCheck(5);
weekCheck(15);
weekCheck('L');

//Read 1,10,100,1000,10000 and print in words
function unitCheck(num){
    switch(num){
        case 1: console.log("Unit"); break;
        case 10: console.log("Ten"); break;
        case 100: console.log("Hundred"); break;
        case 1000: console.log("Thousand"); break;
        case 10000: console.log("Ten Thousand"); break;
        default: console.log("Invalid Number");
    }
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

    switch(max){
        case value1: console.log("Max: "+"a+b*c="+value1); break;
        case value2: console.log("Max: "+"a%b+c="+value2); break;
        case value3: console.log("Max: "+"c+a/b="+value3); break;
        case value4: console.log("Max: "+"a*b+c="+value4); break;
    }

    switch(min){
        case value1: console.log("Min: "+"a+b*c="+value1); break;
        case value2: console.log("Min: "+"a%b+c="+value2); break;
        case value3: console.log("Min: "+"c+a/b="+value3); break;
        case value4: console.log("Min: "+"a*b+c="+value4); break;
    }
}
maxMinOperations(1,2,3);
maxMinOperations(8,15,12);
maxMinOperations(0,19,12);

//Unit Conversions
function unitConversion(input,value){
    switch(input){
        case 1: console.log("Feet To Inch: "+value+" ft = "+(value*12)+" in"); break;
        case 2: console.log("Feet To Metre: "+value+" ft = "+(value*0.3048)+" m"); break;
        case 3: console.log("Inch To Feet: "+value+" in = "+(value/12)+" ft"); break;
        case 4: console.log("Metre To Feet: "+value+" m = "+(value*3.28084)+" ft"); break;
        default: console.log("Invalid Number");
    }
}
unitConversion(1,24);
unitConversion(2,24);
unitConversion(3,24);
unitConversion(4,24);
