import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';
import MyForm from "./MyForm.js";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyForm />
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
