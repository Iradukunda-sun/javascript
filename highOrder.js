// //declaration function
// function addNumbers (a,b){
//     let addition = a+b
//     return addition;
// }
// //arrow function
// const addNumbers =(a,b) => {
//     let addition= a+b;
//     return addition;
// }
// //expression functions
// const addNumbers= function(a,b){
//     return addition;
// }
// //anomymous function(no name used inside evetListeners and other element)
// setTimeout(function(a,b){
//     return addition;
// },400)
// //immediately evoked function
// (function(a,b){
//     return addition;
// })()
// //callback function
// let callback=function(n){
    
//     return n**2;
// };
// function cubed(callback,n) {
//     return callback(n)*n
// };
// console.log(cubed(callback,4));
// function greet (name,callback){
//     console.log("hello"+ name);
//     callback();
// }
// function goodbye(){
// console.log("goodbye")
// }
// greet("Caleb",goodbye);
function fetchData(callback){
    setTimeout(function(){
    console.log('Data fetched succesfully');
    callback('Data');
},2000);
}
function displayData(data){
    console.log('processing data...'+ data);
}
fetchData(displayData);
//inbuilt high order function(for each)
let sum = 0
let numbers =[1,2,3,4,5];
numbers.forEach(function(n)
{
    return(sum=sum+n);
})
console.log(sum);


let grains = ['maize', 'gnuts', 'rice','beans'];
grains.forEach(function(grain){
    console.log(grain.toLocaleUpperCase());
})

//function for filtering out search data
let landCountries=['finland', 'Greenland', 'Poland', 'Ireland', 'Iceland']
let filteredCountries=landCoountries.filter(function(){
    
})