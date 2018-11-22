import * as React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import reducers from "./reducer";

class App extends React.Component {
  public render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <BrowserRouter forceRefresh={true}>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
