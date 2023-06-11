import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    //BEM Convention
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />

                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />

                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
