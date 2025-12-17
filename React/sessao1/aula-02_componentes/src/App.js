import Component from "./components/Component";
import NovoComponent from "./components/NovoComponent";

//style
import "./App.css"
import Events from "./components/Events";
import Somador from "./components/Somador";

//comentario
function App() {
  return (
    <section>
      {/*--comentario*/}
      <Component />
      <NovoComponent />
      <Events />
      <Somador />
    </section>
  );
}

export default App;
