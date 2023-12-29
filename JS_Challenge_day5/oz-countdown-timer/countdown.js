function Countdown(){ //카운트다운 객체 생성
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
    this.box = document.getElementById("timerbox")

    this.prevalues = {
        sec : null,
        min : null,
        h : null,
        d : null,
        m : null,
        y : null
    }
   
    this.resetTimer = function(){
        this.isRunning = false;
        clearInterval(this.timer);
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
        this.days = 0
        this.months = 0
        this.years = 0
        document.getElementById("date-select").reset();
        this.box.style.display = 'none'
    }

    this.startTimer = function(){
        this.current = new Date()
        this.time = this.inputDate - this.current;

        this.seconds = Math.floor(this.time / 1000) % 60;
        this.minutes = Math.floor(this.time / (1000 * 60)) % 60;
        this.hours = Math.floor(this.time/ (1000 * 60 * 60)) % 24;
        this.days = Math.floor(this.time/ (1000 * 60 * 60 * 24) % 30);
        this.months = Math.floor(this.time/ (1000 * 60 * 60 * 24 *30) % 12); // 단순 예시로 30일을 한 달로 계산합니다.
        this.years = Math.floor(this.time/ (1000 * 60 * 60 * 24 * 30 * 12));
        
        this.box.style.display = 'flex'
        
        this.addEffect(this.seconds,"sec")
        this.addEffect(this.minutes,"min")
        this.addEffect(this.hours,"h")
        this.addEffect(this.days,"d")
        this.addEffect(this.months,"m")
        this.addEffect(this.years,"y")
    }
    this.addEffect = function(value,timeunit){
        if (value !== this.prevalues[timeunit]) {
            const display = document.getElementById(timeunit)
            display.textContent = value
            display.classList.add('effect');
            setTimeout(() => {
                display.classList.remove('effect');
            }, 500);
            this.prevalues[timeunit] = value;
          }
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
        
        this.inputDate = new Date(year, month-1, day)
        
        if(!this.isRunning){
            this.isRunning = true;
            this.timer = setInterval(this.startTimer.bind(this), 1000);
        }
    }.bind(this))
}

var countdownTimer = new Countdown();

countdownTimer.box.style.display = "none"