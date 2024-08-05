let icon = document.getElementById("icon");
let logo = document.getElementById("logo");


icon.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
    logo.classList.toggle('logo-dark')
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png"
    }else{
        icon.src = "img/moon.png"
    }
})