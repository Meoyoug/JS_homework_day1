

//입력받은 날부터 카운트 다운하는 함수
function Countdown(){


    this.timer = null;
    this.isRunning = false;

    this.display = document.getElementById("display");
    this.resetBtn = document.getElementById("reset");
    this.selectForm = document.getElementById("date-select");
    this.yearDisplay = document.getElementById("year");
    this.monthDisplay = document.getElementById("month");
    this.dayDisplay = document.getElementById("day");
    this.hourDisplay = document.getElementById("hour");
    this.minuteDisplay = document.getElementById("minute");
    this.secondDisplay = document.getElementById("second");
    this.setTimer = function(){
        this.time = 0;
        this.years = 0;
        this.months = 0;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;

        this.updateDisplay()
    }
    this.startTimer = function(){
        this.seconds = Math.floor(this.time / 1000) % 60;
        this.minutes = Math.floor(this.time / (1000 * 60)) % 60;
        this.hours = Math.floor(this.time/ (1000 * 60 * 60)) % 24;
        this.days = Math.floor(this.time/ (1000 * 60 * 60 * 24) % 30);
        this.months = Math.floor(this.time/ (1000 * 60 * 60 * 24 *30) % 12); // 단순 예시로 30일을 한 달로 계산합니다.
        this.years = Math.floor(this.time/ (1000 * 60 * 60 * 24 * 30 * 12));
        if(!this.isRunning){
            this.isRunning = true;
            this.timer = setInterval(this.updateCountDown.bind(this), 1000);
        }
        
    };
   
    this.resetTimer = function(){
        this.isRunning = false;
        clearInterval(this.timer);
        this.years = 0;
        this.months = 0;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        console.log(this.years)
        this.updateDisplay();
    };
    this.updateCountDown= function(){
        this.seconds--; // 시간 감소
        if (this.seconds === 0 && this.minutes === 0 && this.hours === 0 && this.days === 0 && this.months ===0 & this.years === 0) {
            clearInterval(this.timer);
        }
        if(this.seconds === -1){
            this.seconds = 59;
            this.minutes--;
        }
        if(this.minutes === -1){
            this.minutes = 59;
            this.hours--;                          
        }
        if(this.hours === -1){
            this.hours = 23;
            this.days--;                          
        }
        if(this.days === -1){
            this.months--;
            if (this.months === 1 || this.months === 3 || this.months === 5 || this.months === 7 || this.months === 8 || this.months === 10 || this.months === 12) {
                this.days = 30
            } else if (this.months === 4 || this.months === 6 || this.months === 9 || this.months === 11) {
                // 4, 6, 9, 11월은 30일
                this.days = 29
            } else {
                this.days = 27
            }
        }
        
        if(this.months === -1){
            this.months = 11;
            this.years--;
        }
        this.updateDisplay();
    }
        

    this.updateDisplay = function(){  
        this.yearDisplay.textContent = `${this.years} 년`
        this.monthDisplay.textContent = `${this.months} 월`
        this.dayDisplay.textContent = `${this.days} 일`
        this.hourDisplay.textContent = `${this.hours} 시`
        this.minuteDisplay.textContent = `${this.minutes} 분`
        this.secondDisplay.textContent = `${this.seconds} 초`
    };
    
    this.resetBtn.addEventListener('click',this.resetTimer.bind(this));

    this.selectForm.addEventListener('submit',function(event){
        event.preventDefault()
        let year = event.target.year.value
        let month = event.target.month.value
        let day = event.target.day.value
        console.log(year)
        
        const inputDate = new Date(year, month-1, day)
        const current = new Date()
        this.time = inputDate - current;
        console.log(this.time)
        
        this.startTimer()
    }.bind(this))
}

var countdownTimer = new Countdown();

countdownTimer.setTimer()

//입력받은 년,월,일을 Date 객체로 생성.
