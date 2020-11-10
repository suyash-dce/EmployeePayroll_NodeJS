//a. Roll a die and find the number between 1 to 6
//b. Repeat the Die roll and find the result each time
//c. Store the result in a dictionary
//d. Repeat till any one of the number has reached 10 times
//e. Find the number that reached maximum times and the one that was for minimum times

function checkBreakCond(diceMap){
    let rollCount=0;
    let flag=false;
    for (var i=1;i<=6;i++){
        rollCount=diceMap.get(i);
        if(rollCount==10){
            flag = true;
            break;
        }
        flag = false;
    }
    return flag;
}

let getMaxFlag=false;
let diceMap=new Map();
for (var i=1;i<=6;i++){
    diceMap.set(i,0);
}
console.log("Generating Starter Map: ");
console.log(diceMap);
let roll=0;
do{
    roll = Math.floor((Math.random()*6)+1);
    let rollCount=diceMap.get(roll);
    diceMap.set(roll,rollCount+1);
    getMaxFlag=checkBreakCond(diceMap);
}while(!getMaxFlag);
console.log("Map at end Condition:");
console.log(diceMap);
console.log("Got max value:10, for number "+roll);

let minCount=10;
let min=10;
for (var i=1;i<=6;i++){
    let rollCount=diceMap.get(i);
    if (rollCount<minCount){
        minCount=rollCount;
        min=i;
    }
}
console.log("Got min value:"+minCount+", for number "+min);

//Write a Program to generate a birth month of 50 individuals
//between the year 92 & 93. Find all the individuals having birthdays
//in the same month.

let birthMonthMap=new Map();
let monthBirthMap=new Map();
for (var i=1;i<=12;i++){
    monthBirthMap.set(i,new Array());
}
for (var i=1;i<=50;i++){
    let month=Math.floor((Math.random()*12)+1);
    birthMonthMap.set("Person "+i,month);
    for (var j=1;j<=12;j++){
        if (month==j){
            let newArr=monthBirthMap.get(j);
            newArr.push("Person "+i);
            monthBirthMap.set(j,newArr);
        }
    }
}
console.log("Map containing input data:");
console.log(birthMonthMap);
console.log("Map with people having same birth month:");
console.log(monthBirthMap);
