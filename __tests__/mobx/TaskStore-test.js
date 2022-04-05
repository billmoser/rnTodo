import TaskStore from "../../mobx/TaskStore"

// Tests of the TaskStore MobX store.
describe("TaskStore", () => {
    it("creates new todos and removes them", () => {
        const store = TaskStore
        
        const firstTask = "feed the chickens";
        const secondTask = "milk the cows";
        
        TaskStore.addTask(firstTask)
        expect(store.taskList[0]).toBe(firstTask)
        expect(store.count).toBe(1)
        
        TaskStore.addTask(secondTask)
        expect(store.taskList[1]).toBe(secondTask)
        expect(store.count).toBe(2)
        
        // Delete the first task that was added, so only second is left.
        TaskStore.deleteTask(0)
        expect(store.taskList[0]).toBe(secondTask)
        expect(store.count).toBe(1)

        // Delete the last task that was added, now none are left.
        TaskStore.deleteTask(0)
        expect(store.count).toBe(0)
    })
})