let ScrollContainer = document.querySelector(".gallary")
let backBtn = document.getElementById("backbtn")
let nextBtn = document.getElementById("nextbtn")



ScrollContainer.addEventListener('wheel', (e)=>{
    e.preventDefault();
    ScrollContainer.scrollLeft += e.deltaY;
    // ScrollContainer.style.scrollBehavior = "smooth"
})

nextBtn.addEventListener("click",()=>{
    ScrollContainer.style.scrollBehavior = "smooth"
    ScrollContainer.scrollLeft += 900;
})

backBtn.addEventListener("click",()=>{
    ScrollContainer.style.scrollBehavior = "smooth"
    ScrollContainer.scrollLeft -= 900;
})
