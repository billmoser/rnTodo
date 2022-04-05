import TaskStore from "../../mobx/TaskStore"

// Tests of the TaskStore MobX store.
describe("TaskStore", () => {
    it("creates new todos and removes them", () => {
        const store = TaskStore
        
        const firstTask = "feed the chickens";
        const secondTask = "milk the cows";
        
        TaskStore.tasks.addTask(firstTask)
        expect(TaskStore.tasks.items[0]).toBe(firstTask)
        expect(store.count).toBe(1)
        
        TaskStore.tasks.addTask(secondTask)
        expect(TaskStore.tasks.items[1]).toBe(secondTask)
        expect(store.count).toBe(2)
        
        // Delete the first task that was added, so only second is left.
        TaskStore.tasks.deleteTask(0)
        expect(TaskStore.tasks.items[0]).toBe(secondTask)
        expect(store.count).toBe(1)

        // Delete the last task that was added, now none are left.
        TaskStore.tasks.deleteTask(0)
        expect(store.count).toBe(0)
    })
})