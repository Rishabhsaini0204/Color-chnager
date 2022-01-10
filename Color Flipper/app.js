const colors=["green", "red", "rgba(133,122,200)", "#f15025","black","white"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");
btn.addEventListener("mouseenter",function(){
    const randomNumber=getRandom();
    //   console.log(randomNumber);
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor=colors[randomNumber];
});
function getRandom(){
    return Math.floor(Math.random()*colors.length);
}