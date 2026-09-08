// loops
// for loop

for(i=1;i<=5;i++){
 console.log("Manik Puri");
};

//calculate sum from 1 to n numbers

n=5
let sum=0;
for(i=1;i<=n;i++){
  sum = sum+i
}

console.log(sum);

//Infinite Loop #BETTER NOT USE THAT 

// While Loop

let k=1
while(k<=5){
    console.log(k);
    k++
};

//Do While loop ( atleast run one time no matter what)
 i=20
do{
    console.log("Manik Puri");
    i++
}while(i<=10); // see here i=20 is given and there is no way 20<10 even then it will print because do while loop always run one time.

//one more example of do while loop

i=1

do{
    console.log("i=",i);
    i++
}while(i<=5)

    //For of loop basically for string and arrays havent studied arrays yet so will apply on strings for now

    let str="ManikPuri";

    for(let i of str){
        console.log(i);
    };

    // one more example

    let size = 0

    for(let i of str){
        console.log("i=", i);
       size ++;
    };
    console.log("size of string=",size);

    //for in loop (for objects and arrays)

    let student={
        name : "Rahul Kumar",
        cgpa : 7.8,
        age : 20,
        isPass : true,

    };

    for(let m in student){
      
    console.log( m ,"=", student[m]);
    }

    //strings in JS
      //str.length
    str = "manikpuri";

    console.log(str.length);

    //str Indices

    console.log(str[0]);

    //Template Literals in JS

 boom= `This is a Template Literal also called a special strong `;

 // lets learn how it is special 

 let obj = {
    item : " pen " ,
   price : 20 , 

 };

 console.log(`the cost of ${obj.item} is ${obj.price}`);

 // \n new line \t tab space already know that 

 // String Methods in JS

 str = "manik puri";

 let newstr = str.toUpperCase()
    console.log(newstr);

    // some more useless strins functions which i am gonna do but gonna forget later and check it on google 

 str = "ManikDon "
 str2 = "is learing Java script"
  console.log(str.slice(1,3));

  console.log(str.concat(str2));
 
  console.log(str.replace("Don","King"));



  /* one practice question
    Prompt the user to enter their full name. Generate a username for them based on the input @+full name+fullname length
*/

let fullname = prompt("Enter your fullnamke");

let userName = "@" + fullname + fullname.length;
console.log(userName);
