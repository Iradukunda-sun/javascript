//function greets me
function greet (name){
    console.log('hi,' + name + ' ')
}
greet('caleb');

//declaring a function without a parameter
function areaofCircle (radius){
    

let area = Math.PI*radius*radius
return area;
 }

 console.log(areaofCircle(27))

 areaofCircle()
 areaofCircle()
 areaofCircle()
 areaofCircle()

 function sum(x,y){
    let add= x+y
    return add;
 }
 console.log(sum(5,5))


 //arrow function


 const sum2= (x,y)=>x+y
 console.log(sum2(5,5))

 const product= (a,b)=>a*b + 'N'; 
 console.log (product(24,15))

 function product1 (m,g=9.8){
    let weight =m*g
    return weight + 'N';
 }
 console.log(product1(6));