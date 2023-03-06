function startListeners(){
    const addbutton = document.querySelector(".add-task")
    addbutton.addEventListener("click",function(){
        new TasksDialog().addOpen()
    })
}
class TasksDialog{
    constructor(){
        this.addModal = document.querySelector(".add-task-dialog")
    }

    addOpen(){
        this.addModal.showModal()
    }
    addClose(){
        this.addModal.close()
    }
}



window.addEventListener('load',startListeners)