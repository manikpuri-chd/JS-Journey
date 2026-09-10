function myFunction(msg){
    console.log(msg);
};

myFunction("Learning JS!");

// Function = 2 numbers sum

function sum(a,b){
    console.log(a+b)

};

sum( 89,92);

// using return

function boom(x,y){

  s= x+y

  return s;
}

let val = boom(3,4);

console.log(val);

// arrow function

const product = (a,b)=>{
    return a*b;
};

let mul = product(23,43)

console.log(mul);

function countVowels(str){
    let count = 0;

    for (const char of str){
       if( char ==="a" || char === "i" || char==="e" || char==="o" || char==="u"){
        count++;

       }
      
    }
        console.log(count);

    return count;

}


countVowels("Manik Puri");



const countvow = (str) =>{
    
let vowcount=0;
    for(const charac of str){
        
        if(charac==="a"  || charac==="e" || charac==="o" || charac==="i"|| charac==="u"){
            vowcount++;
        }
    }
    console.log(vowcount);
    return vowcount;
}




Array=[1,2,3,4,5,90,27];

Array.forEach((val, idx) => {
    console.log(val , idx);
    
});

Array.forEach((num)=>{
 console.log(num*num);
})

let newArr = Array.map((val)=>{
    return(val*val);
})

console.log(newArr);


arr=[1,2,3,4,5,6,7,8,9,10];

 let evenarr = arr.filter((vall) => {
    return vall%2===0;
 }) 

 console.log(evenarr);


 let output = arr.reduce((res,curr)=>{
 return res+ curr;
})
console.log(output);

let bigNum = arr.reduce((res,curr)=>{
 return res > curr ? res : curr;
})
console.log(bigNum);

let marks=[94,98,90,87,65];

let topper= marks.filter((val)=>{
    return val>=90;
})

console.log(topper);




let n = prompt("Enter a Number : ");
let arra=[];
for(i=1;i<=n;i++){
    arra[i-1]=i;
}
console.log(arra);

let summ = arra.reduce((res,curr)=>{
    return res+curr;
})
console.log(summ);

let mull = arra.reduce((res,curr)=>{
    return res*curr;
})
console.log(mull);