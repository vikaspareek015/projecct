const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-list');

item.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        addToDo(this.value);
        this.value = '';
    }
})

const addToDo =(item) =>{
    const listitem = document.createElement('li');
    // toDoBox.appendChild(listitem);    // we can put it anyWhere. this is not effect output or anything
    
    listitem.innerHTML = `
     ${item}
    <i class="fa-solid fa-xmark"></i>
    `;

    listitem.addEventListener('click', 
    function(){
        this.classList.toggle('done');
    })

    listitem.querySelector('i').addEventListener('click', function(){
        listitem.remove();
    })
    toDoBox.appendChild(listitem);
}