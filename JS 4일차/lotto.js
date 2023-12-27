const date = new Date();
const year = date.getFullYear()
const month = date.getMonth()+1
const day = date.getDate()
const h1 = document.getElementById("title")
const drawBtn = document.getElementById("draw")
const resetBtn = document.getElementById("reset")
const display = document.getElementById('display')
let lottoNumbers = []

h1.textContent = year +"년 "+ month+"월 "+day+"일 "+"로또 번호 추첨"

function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("eachnum")
    eachNumDiv.textContent = number
    display.append(eachNumDiv)
    if(number < 10){
        eachNumDiv.style.backgroundColor = "yellow"
        eachNumDiv.style.color = "black"
    } else if(number < 20){
        eachNumDiv.style.backgroundColor = "blue"
    } else if(number < 30){
        eachNumDiv.style.backgroundColor = "red"
    } else if(number < 40){
        eachNumDiv.style.backgroundColor = "purple"
    } else {
        eachNumDiv.style.backgroundColor = "green"

    }
}
drawBtn.addEventListener('click',function(){
    lottoNumbers.splice(0, 6)
    display.innerHTML = ""
    
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random()*45)+1
        
        if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn)
            paintNumber(rn)
        }
    }
})

resetBtn.addEventListener('click',function(){
    lottoNumbers.splice(0, 6)
    display.innerHTML = ""
})

