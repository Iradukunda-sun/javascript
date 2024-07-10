/* if
if else
if else if else
switch
ternary operator*/

/*if(condition){
    //function
}*/
let number = 0
if (number > 0) {
    console.log(` ${number} is a positive number`)
}
else if (number < 0) { console.log(` ${number} is a negative number`) }
else if (number == 0) { console.log(` ${number} is a zero`) }
else {
    console.log(` ${number} is not a number`)
}



let weather = 'sunny'
if (weather === 'rainy') {
    console.log('you need a raincoat')
}
else if (weather === 'cloudy') { console.log('you need a jacket') }
else if (weather === 'sunny') { console.log('you only need a shirt') }

else {
    console.log('you dont need a rain coat')
}

/* if(condition){
runs when the condition is true}
else{
runs when the condition is false}*/

//switch
let newWeather = 'cloudy'
switch (newWeather) {
    case 'rainy':
        console.log('you need a raincoat')
        break
    case 'sunny':
        console.log('you do not need a raincoat')
        break
    case 'cloudy':
        console.log('you need a jacket')
        break
    case 'windy':
        console.log('you need homelander')
        break
    case 'foggy':
        console.log('stay inside')
        break
    default:
        console.log('wear a shirt')
}



let dayoftheWeekbyuser = prompt('What is the day today')
let day = dayoftheWeekbyuser.toLowerCase()
switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
    case 'saturday':
        console.log('Today is Saturday')
        break
    default:
        console.log('Today is your day')
}


//ternary operator
let isRaining = true
    (isRaining)
    ? console.log('remember to take your raincoat')

    : console.log('no need for a raincoat today')


let inumber =prompt('Enter a number')

switch (inumber) {
    case (inumber > 0):
        console.log('this is a positive number')
        break;
    case (inumber < 0):
        console.log('this is a negative number')
        break;

    default:
        console.log('where are you now')
}


