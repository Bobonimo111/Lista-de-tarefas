function startListeners() {
    const addbutton = document.querySelector(".add-task")
    addbutton.addEventListener("click", function() {
        new TasksDialog().addOpen()
    })
}
class TasksDialog {
    constructor() {
        this.addModal = document.querySelector(".add-task-dialog")
    }

    addOpen() {
        this.addModal.showModal()
    }
    addClose() {
        this.addModal.close()
    }
}
class tasks {

    constructor(title, descricao, date, time) {
        this.title = title
        this.descricao = descricao
        this.date = date
        this.time = time
    }

    // get title(){
    //     return this.title
    // }
    // get descricao(){
    //     return this.descricao
    // }

    taskTemplate() {

    }



}



window.addEventListener('load', startListeners)