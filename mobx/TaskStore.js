import { action, observable, computed, makeObservable} from "mobx";

/*
 * Store pattern: don't export the class, only the taskStore instance below.
 * This ensures that the store will be a singleton.
 */
class TaskStore {
  
  @observable taskList = []

  constructor() {
    makeObservable(this)
  }

  @computed
  get count() {
    return this.taskList.length
  }
 
  @action
  addTask(task) {
    this.taskList = [...this.taskList, task]
  }

  @action
  deleteTask(index) {
    this.taskList.splice(index, 1)
  }
 
}


const taskStore = new TaskStore()

export default taskStore
