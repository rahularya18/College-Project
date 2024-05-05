const buyNow = document.getElementById("buyNow");
buyNow.addEventListener("click",()=>{
    alert("Item Added to the cart");
})



//GSAP CODE
var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.9,
    ease:"back.out"
 })
})