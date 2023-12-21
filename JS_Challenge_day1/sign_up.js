function get_data() {
    const email = document.querySelector("#email").value
    const name = document.querySelector("#name").value
    const pw = document.querySelector("#pw").value
    const phone_first_num = document.querySelector("#phone_first_num").value
    const phone_middle_num = document.querySelector("#phone_middle_num").value
    const phone_last_num = document.querySelector("#phone_last_num").value
    const region = document.querySelector("#region").value
    const sex = document.querySelector('input[name="gender"]:checked').value

    console.log(
        `
        이메일 : ${email} 
        이름 : ${name} 
        비밀번호 : ${pw} 
        휴대폰번호 : ${phone_first_num}-${phone_middle_num}-${phone_last_num}  
        region : ${region} 
        성별 : ${sex}`
    )
}