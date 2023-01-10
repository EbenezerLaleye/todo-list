// window.addEventListener("load",()=>{
// })

const taskForm = document.querySelector("#task-list-form")
const input=document.querySelector("#task-list-input")
const subBtn = document.querySelector("#new-task-submit")
const taskList =document.querySelector("#task-list")

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newTask = document.createElement("div")
    newTask.classList.add("task")

    const newContent =document.createElement("div")
    newContent.classList.add("content")

    const taskText =document.createElement("input")
    taskText.type = "text"
    taskText.classList.add("task-text")
    taskText.value = input.value
    taskText.setAttribute("readonly","readonly")

    const newAction =document.createElement("div")
    newAction.classList.add("action")
    

    const editBtn = document.createElement("button")
    editBtn.classList.add("button")

    const delBtn = createDelBtn()
    editBtn.innerHTML = "Edit"

 

    newContent.append(taskText)
    newAction.append(editBtn)
    newAction.append(delBtn)
    newTask.append(newContent)
    newTask.append(newAction)
    taskList.append(newTask)

    input.value=""

    editBtn.addEventListener("click", ()=>{
        if(editBtn.innerHTML==="Edit"){
            taskText.toggleAttribute("readonly")
            taskText.classList.toggle("task-text")
            taskText.classList.toggle("editmode")

            editBtn.innerHTML="Save"
        }else{
            editBtn.innerHTML="Edit"
            taskText.classList.toggle("editmode")
            taskText.classList.toggle("task-text")
            taskText.toggleAttribute("readonly")
        }
    
    })
})

function createDelBtn (){
    const delBtn = document.createElement("button")
    delBtn.innerHTML = "Delete"
    delBtn.classList.add("button")
    delBtn.addEventListener("click",()=>{
        (delBtn.parentElement).parentElement.remove()
    })
    return delBtn
} 
