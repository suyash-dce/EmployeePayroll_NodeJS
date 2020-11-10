//TempConversion
function getTemp(input,temp){
    let convertedTemp=0;
    switch(input){
        case 'a':{
            console.log("Converting to Fahrenheit");
            convertedTemp=(temp*(9/5)) +32;
            console.log(temp+" deg C = "+convertedTemp+" deg F");
            break;
        }
        case 'b':{
            console.log("Converting to Celcius");
            convertedTemp=((temp-32)*(5/9));
            console.log(temp+" deg F = "+convertedTemp+" deg C");
            break;
        }
    }
}
getTemp('a',Math.floor(Math.random()*100));
getTemp('b',Math.floor((Math.random()*181)+32));

//Palindrome Number Check
function checkPalindrome(num1,num2){
    let revDigits=0;
    let num=num1;
    while(num>0){
        let digit = num%10;
        revDigits = revDigits*10 +digit;
        num=Math.floor(num/10);
    }
    if(revDigits == num2) console.log(num1+" and "+num2+" are Palindromes");
    else console.log(num1+" and "+num2+" are NOT Palindromes");
}
checkPalindrome(256,652);
checkPalindrome(141,414);
checkPalindrome(404,404);

//Take a number from user and check if the number is a Prime then show
//that its palindrome is also prime

function checkPrime(num){
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(num+" is NOT a Prime Number");
            return false;
        }
    }
    if (num>1){
        console.log(num+" is a Prime Number");
        return true;
    }
}

function getPalindrome(num){
    let revDigits=0;
    let number=num;
    while(num>0){
        let digit = num%10;
        revDigits = revDigits*10 +digit;
        num=Math.floor(num/10);
    }
    console.log("The palindrome of "+number+" is "+revDigits);
    return revDigits;
}

function main(num){
    let PrimeFlag=checkPrime(num);
    if(PrimeFlag){
        let palindrome=getPalindrome(num);
        checkPrime(palindrome);
    }
}
main(17);
main(22);
main(23);
