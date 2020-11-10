//Print 2^n for given value of n
function giveExponential(n){
    let value=1;
    for (var i = 0; i <= n; i++) {
        console.log("2^" + i + " = " + value);
        value = value*2;
    }    
}
giveExponential(3);
giveExponential(8);
giveExponential(6);

//Print nth harmonic sum for given value of n
function getHarmonicSum(n){
    let sum=0;
    for (var i = 1; i <= n; i++) {
        sum=sum+(1/i);
    }
    console.log(n+"th Harmonic sum =" + sum);
}
getHarmonicSum(4);
getHarmonicSum(8);
getHarmonicSum(12);

//Determine if no is prime
function checkPrime(num){
    let primeFlag=true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(num+" is NOT a Prime Number");
            primeFlag=false;
            break;
        }
    }
    if (num>1 && primeFlag){
        console.log(num+" is a Prime Number");
    }
}
checkPrime(9);
checkPrime(11);
checkPrime(19);

//Get all prime num till n
function getPrime(num){
    for (var i = 3; i < num; i++) {
        let primeFlag=true;
        for (var j = 2; j < i; j++){
            if (i % j == 0) {
                primeFlag=false;
                break;
            }
        }
        if(primeFlag) console.log(i+" is a Prime Number");
    }
}
getPrime(9);
getPrime(18);
getPrime(21);

//Factorial of a number
function getFactorial(num){
    let product=1;
    for (var i = 1; i <= num; i++) {
        product=product*i;
    }
    console.log(num+"! = "+product);
}
getFactorial(5);
getFactorial(9);
getFactorial(14);

//
function getPrimeFactors(num) {
    for (var i = 2; i <= num; i++) {
        while (num % i == 0) {
            console.log(i+" is a Prime Factor");
            num = num / i;
        }
    }
}
getPrimeFactors(5);
getPrimeFactors(9);
getPrimeFactors(14);
