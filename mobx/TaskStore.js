import { action, observable, computed, makeObservable, makeAutoObservable} from 'mobx';
import Tasks from '../logic/Tasks'


/*
 * Store pattern: don't export the class, only the taskStore instance below.
 * This ensures that the store will be a singleton.
 */
class TaskStore {
  
  @observable tasks = new Tasks()

  constructor() {
    makeObservable(this)
    makeAutoObservable(this.tasks) // Needed to observe tasks.items
  }

  @computed
  get count() {
    return this.tasks.numTasks
  }
 
  @action logInfo() {
    console.log('Store: %dnum tasks', this.count)
  }
 
}

const taskStore = new TaskStore()

export default taskStore
