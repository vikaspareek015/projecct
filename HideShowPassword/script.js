let password = document.getElementById("password")
let eyeicon = document.getElementById("eyeicon")

eyeicon.addEventListener("click",()=>{
    if(password.type == "password"){
        password.type = "text"
        eyeicon.src = "img/eye-open.png"
    }else{
        password.type = "password"
        eyeicon.src = "img/eye-close.png"
    }
})


// eyeicon.onclick = function(){
//     if(password.type == "password"){
//         password.type = "text"
//     }else{
//         password.type = "password"
//     }
// }