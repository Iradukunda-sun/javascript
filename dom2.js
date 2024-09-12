//create the element
//document.createElement() //goes hand in hand with append or appendChild best used with a container
let container = document.getElementById("container")
let addButton = document.getElementById("add-product")

addButton.addEventListener("click", function(){
let newProduct = document.createElement("p");
newProduct.textContent ="Beans"
container.appendChild(newProduct)
});


//addEvevtListener()-inbuilt, helps us to capture user signals /input(click, scroll etc)







//get/read the element
//  let title=document.getElementById("title")
let subTitleElemet=document.getElementsByClassName("sub-title");
let updateButton=document.querySelector("#update");

console.log(document.getElementById("title"));
console.log(subTitleElemet);
console.log(updateButton);
//add the element (element.innerHTML or element.textContent)





//delete the element(removeChild of the container or the div)

