import './App.css'
import AddTasks from './assets/components/AddTasks'
import Tasks from './assets/components/Tasks'

function App() {
  return (
    <>
      <h1 className='text-red-500'>Gerenciador de tarefas</h1>
      <Tasks />
      <AddTasks />
    </>
  )
}

export default App
