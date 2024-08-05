// const EditButton = document.getElementById('Edit-button');
const NotesContainer = document.querySelector('.notes-container')
const createbtn = document.querySelector('.btn')
const notes = document.querySelectorAll('.input-box')

// function CreateNote(){
//     const paragraph = document.createElement("p");
//     paragraph.classList.add('input-box');
//     // paragraph.setAttribute('contenteditable', 'true')
//     const image = document.createElement("img");
//     // image.src = "images/delete.png"
//     paragraph.appendChild(image);
//     // NotesContainer.appendChild(paragraph);
// }

function showNotes(){
    NotesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes', NotesContainer.innerHTML);
}

createbtn.addEventListener("click", ()=>{
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    NotesContainer.appendChild(inputBox).appendChild(img);
})

NotesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})