
export default class Tasks {

  items = []

  addTask(task) {
    this.items.push(task)
  }

  deleteTask(index) {
    this.items.splice(index, 1)
  }

  get numTasks() {
    return this.items.length
  }
}