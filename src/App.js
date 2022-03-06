import "./App.css";
import { StateProvider } from "./contextApi/stateProvider";
import List from "./pages/List/List";
import { initialState, reducer } from "./contextApi/reducer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useHeight from "./useHeight";
import PersonDetail from "./pages/PersonDetail/PersonDetail";
import Form from "./pages/Form/Form";
function App() {
  const height = useHeight();

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="app" style={{ height: height }}>
          <div className="container">
            <Switch>
              <Route exact path="/add">
                <Form />
              </Route>
              <Route exact path="/kisiler/:id">
                <PersonDetail />
              </Route>
              <Route exact path="/">
                <List />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
