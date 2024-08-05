const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_bar')

toggleBtn.addEventListener('click', ()=>{
    // dropdownBar.classList.toggle('open').
    dropdownMenu.classList.toggle("open");
    console.log("iam alive")
    const isOpen = dropdownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen? "fa-solid fa-xmark":"fa-solid fa-bars";
})