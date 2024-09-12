object = {
    name: 'Iradukunda',  
    age: 12
}

object1 = {
    name: 'Ngumije',  
    age: 15
}
//constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person3 = new Person('Drex',19)
let person4 = new Person('Dred',17)
let person5 = new Person('Drep',10)
let person6 = new Person('Dreo',9)
console.log(person3, person4, person5, person6)

//class in javascript is a blueprint for creating objects
class  People{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let person7 = new People('Embid',20)
let person8 = new People('Curry',30)
let person9 = new People('Michael',23)
let person10 = new People('Kobe',24)

// class Rectangle {
//     constructor(width, height){
        
//     this.width = width
//     this.height = height
// }
// }
// 
// function Rectangle( width, height){
//     this.width = width
//     this.height = height
// };


// let rectangle1={
//        height:67,
//        width:100,
// }
// let rectangle2={
//     height:45,
//     width:90,

//}
// console.log(rectangle1,rectangle2)
// let rect1 = new Rectangle(250, 100);
// let rect2 = new Rectangle(82, 40);
// let rect3 = new Rectangle(163, 74);
// let rect4 = new Rectangle(93, 37);
// class Rectangle {
//         constructor(width, height){
            
//         this.width = width
//         this.height = height
//     }
//     calculateArea() {                  //calculating area of rectangle
//         this.height * this.width;
//     }
//     calculatePerimeter(){             //calculating perimeter of rectangle
//         2*(this.height+this.width)}
//     }
//     console.log(rect1.calculateArea(),rectangle2.calculatePerimeter());

//inheritance
class CSE {
    constructor(name,) {
        this.name = name;
        
    }
   writeCode(){
    console.log(`${this.name} writes code`)
   }
}
class Js extends Cse {
    constructor(name,) {
        super(name);
}
writeCode(){
    console.log(`${this.name} writes javascript code`)
   }
}
let jsEngineer = new Js('Iradukunda');