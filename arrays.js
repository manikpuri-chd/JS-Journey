//arrays is just a special object with no key and is good for storing info

let heroes= ["Salman Khan","Iron Man","Hulk","Spider Man","Super Man","Binod"];

// now heroes is a array we use square brackets and to print all of it without using indices we use loops 

// for loop

for(hero=0;hero<heroes.length;hero++){
    console.log(heroes[hero]);
}

// for of loop

let cities = ["chandigarh","Ludhiana","Chattisgarh","Bathinda","Delhi","Bombay","Bihar"];

for(let city of cities){
    console.log(city);
}