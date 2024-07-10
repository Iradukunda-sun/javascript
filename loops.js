//print 0 to 5 using cosole.log
//let number=0
/*console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);*/

//the loop
/*for(let m=0; m<=5;m++){
    console.log(m)
}

for(let w=5; w>=0; w-- ){
    console.log(w)
}*/

let numbers=[1,2,3,4,5]
for(let i=0; i<numbers.lenght; i++){
    let add =number[i]+20;
    console.log(add);
}
//innitialization, condition, increment/decrement
let sum=0
for(i=0; i<numbers.length;i++){
sum=sum+numbers[i]
}
console.log(sum);

let girls = [ "tracy",   "promise",  "martha",   "joan",   "betty" ]
console.log(girls.length)
 let allGirls = "All girls are;"
 for(let index=0; index<girls.length;index++){
    let oneGirl=girls[index];
    allGirls= oneGirl+ allGirls
 }
 console.log(allGirls);

 for(let x=0;  x<5; x++){
    console.log('hello world');
 }