let i=0;
let j=5; //slides totales
const dots=document.querySelectorAll(".dot-container button");
console.log(dots);
//Next button function
function next(){
    document.getElementById("content"+ (i+1)).classList.remove("active");
    i=(j+i+1)%j;
    document.getElementById("content"+(i+1)).classList.add("active");
    indicator(i+1);
}
function prev(){
    document.getElementById("content"+ (i+1)).classList.remove("active");
    i=(j+i-1)%j;
    document.getElementById("content"+(i+1)).classList.add("active");
}
function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor="transparent";   
    });
    document.querySelector(".dot-container button:nth-child("+num+")").style.backgroundColor="#73706c";
}