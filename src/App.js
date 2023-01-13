import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Context from "./context/Context";
import Context2 from "./context/Context2";
import useCRUD from "./hooks/useCRUD";

function App() {

  // Importa o custom hook ; Entity = endpoint
  const useCrud = useCRUD({ entity: "user" });
  
  const useCrud2 = useCRUD({ entity: "profile" });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Context.Provider value={useCrud}>
          <Context2.Provider value={useCrud2}>
            <Component1>
              <Component2>
                <Component3></Component3>
              </Component2>
            </Component1>
          </Context2.Provider>
        </Context.Provider>
      </header>
    </div>
  );
}

export default App;
