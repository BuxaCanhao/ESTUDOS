import AddTask from "./conponents/AddTask";
import Task from "./conponents/Task";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p6">
      <div className="w-[500px]">
        <h1  className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Task/>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
