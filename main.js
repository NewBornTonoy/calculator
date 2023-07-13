let display = document.querySelector(".display");

let btn = Array.from(document.querySelectorAll(".items"));

let string = "";
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.innerHTML == "="){
                display.innerHTML = eval(string);
        }else if(button.innerHTML == "AC"){
            display.innerHTML = "";
        }else if(button.innerHTML == "Del"){
            string = string.substring(0,string.length-1);
            display.innerHTML = string;
        }
        else{
            
            string = display.innerHTML + button.innerHTML;
            display.innerHTML = string;
        }
    })
})
