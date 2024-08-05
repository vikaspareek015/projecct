var Password = document.getElementById("Password")
var message = document.getElementById("message")
var Strength = document.getElementById("Strength")


Password.addEventListener("input", ()=>{
    if(Password.value.length > 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }

    if(Password.value.length < 4){
        Strength.innerHTML = "weak"
        Password.style.borderColor = "#ff5925"
        Password.style.color = "#ff5925"
    }else if(Password.value.length >= 4 && Password.value.length < 8 ){
        Strength.innerHTML = "medium"
        Password.style.borderColor = "yellow"
        Password.style.color = "yellow"
    }else if(Password.value.length >= 8){
        Strength.innerHTML = "strong"
        Password.style.borderColor = "#ff5925"
        Password.style.color = "#ff5925"
    }
})
