let data = [];

document.querySelector('.add-todo').addEventListener('click', ()=>{
    if(document.querySelector('.todo-input').value !== ''){
        const dataEntry = {
            userInput: document.querySelector('.todo-input').value,
            day: `${new Date().getDate()}`,
            month: `${new Date().getMonth()+1}`,
            year: `${new Date().getFullYear()}`,
        }
        data.push(dataEntry)
        refreshData()
    }
})

document.querySelector(".todo-input").addEventListener("keydown", (event)=> {
    if (event.keyCode === 13) {
        if(document.querySelector('.todo-input').value !== ''){
            const dataEntry = {
                userInput: document.querySelector('.todo-input').value,
                day: `${new Date().getDate()}`,
                month: `${new Date().getMonth()+1}`,
                year: `${new Date().getFullYear()}`,
            }
            data.push(dataEntry)
            refreshData()
        }
    }
}); 