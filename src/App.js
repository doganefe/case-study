import "./App.css";
import { StateProvider } from "./contextApi/stateProvider";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import { initialState, reducer } from "./contextApi/reducer";
import useHeight from "./useHeight";

function App() {
  const height = useHeight();

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="app" style={{ height: height }}>
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
