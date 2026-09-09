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

let marks=[85,97,44,37,76,60];

let sum = 0;

for(let val of marks){
    sum = sum + val;
}

let avg = sum/6
console.log(avg);