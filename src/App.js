import { Component } from "react";
import "./App.css";
import Signup from "./components/signup";
import { Login } from "./components/login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/container";
import { Provider } from "react-redux";
import store from "./redux/redux";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}
export default App;
