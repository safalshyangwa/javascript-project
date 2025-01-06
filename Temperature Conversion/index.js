const textbox=document.getElementById("textbox");
const tofahrenheit=document.getElementById("tofahrenheit");
const tocelcius=document.getElementById("tocelcius");
const result=document.getElementById("result");
let temp;

function convert()
{
    if(tofahrenheit.checked)
    {

    
    temp=Number(textbox.value);
    temp=(temp*9/5)+32;
    result.textContent=temp.toFixed(2)+"°F";            
}
else if(tocelcius.checked){
    temp=Number(textbox.value);
    temp=(temp-32)*5/9;
    result.textContent=temp.toFixed(2)+"°C";

}
else{
    result.textContent="Please select a unit";  
}
}
