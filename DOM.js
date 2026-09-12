let para = document.querySelectorAll("p");
console.dir(para);

let child = document.querySelector("div")
console.log(child.children);


console.log(child.innerHTML);

console.log(child.innerText);



let paras = document.querySelectorAll("p");
let idx = 1;

for(para of paras){
   para.innerText = `new unique value ${idx}`;
   idx++;
    }

let myParagraph = document.querySelector("#para1");
let pClass = myParagraph.getAttribute("class");
console.log(pClass);
myParagraph.setAttribute("class","boom shaka laka");

let newBtn = document.createElement("button");
let newBtn2 = document.createElement("button");
newBtn.innerText = "click me!";
newBtn2.innerText = "click me!";
console.log(newBtn);
console.log(newBtn2);

let div = document.querySelector("div");

div.append(newBtn);
div.prepend(newBtn2);

