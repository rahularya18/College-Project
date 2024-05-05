var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        console.log("bar"); 
    })
}
if(close){
   close.addEventListener('click', () => {
        nav.classList.add('active');
        console.log("close"); 
      })
}


var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.9,
    ease:"back.out"
 })
})