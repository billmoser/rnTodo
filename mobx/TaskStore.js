import { action, observable, computed } from 'mobx'
import { makeObservable, makeAutoObservable, autorun } from 'mobx';
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
    this._loadReactions()
  }

  @computed
  get count() {
    return this.tasks.numTasks
  }

  _loadReactions() {
    autorun(() => {
      console.log(`TaskStore: ${this.count} task(s)`)
    })
  }

}

const taskStore = new TaskStore()

export default taskStore
