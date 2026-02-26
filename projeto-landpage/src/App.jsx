{/*componentes*/}
import AddTask from "./conponents/AddTask";
import Task from "./conponents/Task";

{/*estilo*/}
import "./App.css";

function App() {
  return (
    <div>
      <div style={{width: 250, margin: 'auto'}}>
        <AddTask />
        <AddTask />
      </div>
      <div style={{width: 150, margin: 'auto'}}>
        <Task />
      </div>
      <AddTask />
    </div>
  );
}

export default App;
