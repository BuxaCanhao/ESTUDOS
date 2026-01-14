import AddTask from "./conponents/AddTask";
import Task from "./conponents/Task";

import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-sky-200 dark:bg-amber-900 flex justify-center p6">
      <div className="w-[500px] h-dvh bg-amber-50 dark:bg-[#acc7c7] rounded-t-[500px] outline-10 outline-offset-4">
        <h1 className="text-4xl text-blue-300 font-bold text-center text-shadow-2xs">
          Gerenciador de Tarefas
        </h1>
        <p className="text-zinc-500 font-extrabold text-3xl">
          teste
        </p>
        <Task />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
