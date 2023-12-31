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
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Signup from "./Signup";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NN6JTSBR0zuWnhLC8SSdUejcxh3Y1qFOT1oxnWcK2qCWZkXP9CnGtMqzObvyIeVy4kew7zLrxIP58Z4SpPgsbuO00mDvUVfvS"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>", authUser);

      if (authUser) {
        //the user just loggedin/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
            path="/signup"
            element={
              <>
                <Signup />
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
            path="/checkout/payment"
            element={
              <>
                <Header />

                <Elements stripe={promise}>
                  <Payment />
                </Elements>
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
