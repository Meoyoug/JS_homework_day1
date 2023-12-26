const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let userID = event.target.id.value
    let userPw1 = event.target.pw.value
    let userPw2 = event.target.check_pw.value
    let userName = event.target.name.value
    let userPhone = event.target.tel.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    console.log(userID, userPw1, userPw2, userName, userPhone, userPosition, userGender, userEmail, userIntro)

    if(userID.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
        return
    }

    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    document.body.innerHTML = ""
    document.write(`<h1><strong>${userID}<strong>님 회원가입에 성공했습니다! 환영합니다!</h1>`)
    document.write(`<p>회원 가입시 입력하신 내역은 다음과 같습니다.<br> - 아이디 : ${userID}<br> - 이름 : ${userName}<br> - 이메일 : ${userEmail}<br> - 전화번호 : ${userPhone}<br> - 원하는 직무 : ${userPosition}`)
})