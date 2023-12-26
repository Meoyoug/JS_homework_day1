function addButtonClickHandler(){
    const buttons = document.querySelectorAll(".button")
    const display = document.getElementById("display")
    const MAX_LENGTH = 16;
    buttons.forEach(button =>{
        button.addEventListener('click',function(){
            const value = button.textContent;
            if(value === "C"){
                display.textContent = "0"
            } else if(value ==="="){
                display.textContent = eval(display.textContent);
                limitDisplayLength();
            } else if (display.textContent === '0') {
                display.textContent = value;
            } else {
                display.textContent += value;
                limitDisplayLength();
            }
            
        })
    });
    function limitDisplayLength() {
        if (display.textContent.length > MAX_LENGTH) {
          display.textContent = display.textContent.slice(0, MAX_LENGTH);
        }
    }
}


window.addEventListener('DOMContentLoaded', addButtonClickHandler);
