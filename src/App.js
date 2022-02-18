import "./App.css";
import { StateProvider } from "./contextApi/stateProvider";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import { initialState, reducer } from "./contextApi/reducer";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="app">
        <div className="container">
          <Header />
          <Form />
          <List />
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
