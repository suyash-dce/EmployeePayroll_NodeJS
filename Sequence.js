//Print random single digit no
console.log(Math.floor(Math.random() * 10));

//Print random die no
console.log(Math.floor(Math.random() * 7));

//Print sum of 2 random die no
let a=console.log(Math.floor(Math.random() * 7));
let b=console.log(Math.floor(Math.random() * 7));
let c=a+b;
console.log(c);

//Sum and avg of 5 random ints
let sum=0
for(a=1;a<=5;a++){
    let x=Math.floor(Math.random() * 100);
    sum=sum+x;
}
console.log("Sum: "+sum);
console.log("Avg: "+(sum/5));

//Unit Conversion
console.log("1 ft = 12 in then 42 in = "+(42/12)+" ft");
let area=60*40;
console.log("Area of 60ftx40ft is "+(area)+" sq ft");
console.log("In metres area is "+(area*0.3048*0.3048)+" sq m");
let multiple=area*25;
console.log("25 of such plots have area= "+(multiple)+" sq ft");
console.log("In acres area is "+(multiple/43560)+" acres");
