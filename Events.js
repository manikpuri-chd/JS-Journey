let btn =document.querySelector("#btn1");

btn.onclick = (evt) => {
    console.log("btn was clicked");
    console.log(evt.type);
    console.log(evt.clientX);
    console.log(evt.clientY);
 
    console.log(evt);
}

let div =document.querySelector(".box");

div.onmouseover = (e)=>{
    console.log("you are inside div");
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e);
}

btn.addEventListener("click", ()=>{
    console.log("Button was clicked");
});
    