name  =  document.getElementById("name-input");
lastName= document.getElementById("lastname-input");
email = document.getElementById("email-input");
passportNum= document.getElementById("passport-input");
password = document.getElementById("password-input");
repearPassword = document.getElementById("password-repeat-input");
creatAccountBtn = document.getElementById("creat-account-btn");
warning = document.getElementById("warning");
users = []
creatAccountBtn.addEventListener("click" , function (e){

    let flag=0;
for(let user in users){
    if(user.email==email.value() )
        flag=1
}
if(flag==1){
    warning.textContent= "قبلا حساب ساخته اید"
}
else{
    if(password.value()==repearPassword){
        user = {
            "name": name.value(),
            "lastname": lastName.value(),
            "email": email.value(),
            "passport": passportNum.value(),
            "password": password.value(),
        }
        users.push(user)
        document.location.href="../login/login.html"
    }
    else{
        warning.textContent ="تکرار رمز با رمز یکی نمیباشد";
    }

}
})
