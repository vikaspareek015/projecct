let ScrollContailer = document.querySelector(".gallary")
let backbtn = document.getElementById("backbtn")
let nextbtn = document.getElementById("nextbtn")

ScrollContailer.addEventListener("wheel",(e)=>{
    e.preventDefault()
    ScrollContailer.style.scrollBehavior = "smooth"
    ScrollContailer.scrollLeft += e.deltaY
})

nextbtn.addEventListener("click", ()=>{
    ScrollContailer.style.scrollBehavior = "smooth"
    ScrollContailer.scrollLeft += 900;
})

backbtn.addEventListener("click", ()=>{
    ScrollContailer.style.scrollBehavior = "smooth"
    ScrollContailer.scrollLeft -= 900;
})