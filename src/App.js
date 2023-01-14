import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Context from "./context/Context";
import Context2 from "./context/Context2";
import useCRUD from "./hooks/useCRUD";

function App() {
  const useCrudUser = useCRUD({ entity: "user" });
  const useCrudProfile = useCRUD({ entity: "profile" });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Context.Provider value={useCrudUser}>
          <Context2.Provider value={useCrudProfile}>
            <Component1>
              <Component2>
                <Component3>
                  <Component4>
                    <Component5>Re-renders, Contexts & Custom Hooks</Component5>
                  </Component4>
                </Component3>
              </Component2>
            </Component1>
          </Context2.Provider>
        </Context.Provider>
      </header>
    </div>
  );
}

export default App;
