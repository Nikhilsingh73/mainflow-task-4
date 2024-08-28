let display = document.querySelector(".display");
let buttons=document.querySelectorAll("button")
let string = '';

buttons.forEach(function(button){
    button.addEventListener("click",function(event){
      
         if(event.target.innerHTML=="AC"){
            string=''
            display.value=string;
         }else if(event.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1)
            display.value=string;
         }else if(event.target.innerHTML=="="){
            string=eval(string)
            display.value=string;
         }
         
         else{
            string += event.target.innerHTML;
            display.value=string;
         }
    })
})