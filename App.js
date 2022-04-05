import React from "react"
import Home from "./screens/Home"
import taskStore from "./mobx/TaskStore"
import { StoreProvider } from "./mobx/StoreHelpers"
 
function App() {
  return (
    <StoreProvider store={taskStore}>
      <Home />
    </StoreProvider>
  );
}
 
/*<Home store={taskStore}/>*/
/*<TaskStoreProvider>
      <Home />
    </TaskStoreProvider>*/
export default App;
