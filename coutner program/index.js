const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
    const increasebtn=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");
let count=0;

decreasebtn.addEventListener("click", function(){
    count--;
    countlabel.textContent=count;
});

increasebtn.addEventListener("click", function(){
    count++;
    countlabel.textContent=count;
});

resetbtn.addEventListener("click", function(){
    count=0;
    countlabel.textContent=count;
});
