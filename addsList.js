const refreshData = ()=>{
    document.querySelector('.todo-list').innerHTML = ''
    for(let i = 0; i<data.length; i++){
    let newLi = document.createElement('li')
    newLi.classList.add('list-group-item')
    newLi.innerText = `${data[i].userInput} ${data[i].month}/${data[i].day}/${data[i].year}`
    document.querySelector('.todo-list').appendChild(newLi)
    }
    document.querySelector('.todo-input').value = ''
}