import React, {useEffect} from 'react'
import Header from './Header';
import Home from'./Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Checkout from './Checkout';
import Orders from "./Orders"
import Footer from "./Footer"
import Login from'./Login';
import Ps5 from'./Ps5';
import Lg_Monitor from'./Lg_Monitor';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Header2 from './Header2';
import Electronics from "./Electronics";
import Fashion from './Fashion';
import Furniture from './Furniture';
import ToysnBaby from './ToysnBaby';
import Books from './Books';

const promise = loadStripe('pk_test_51JcnWwSABIP41UNmUYdN3CV0EWrwYhUDCbufjkj2B5oCE71Bv1TnBgNn3yTqb0qDPwgokX6wtOgIgp8y6u2uwKHm00WUsDtKhg')

function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          user: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      <Switch> 
      <Route path='/Electronics'>
          <Header />
          <Header2 />
          <Electronics/>
          <Footer/>
        </Route>
      <Route path='/Fashion'>
        <Header />
        <Header2 />
        <Fashion/>
        <Footer/>
      </Route>
      <Route path='/Furniture'>
        <Header />
        <Header2 />
        <Furniture/>
        <Footer/>
      </Route>
      <Route path='/ToysnBaby'>
        <Header />
        <Header2 />
        <ToysnBaby/>
        <Footer/>
      </Route>
      <Route path='/Books'>
        <Header />
        <Header2 />
        <Books/>
        <Footer/>
      </Route>
      <Route path='/Ps5'>
          <Header />
          <Header2 />
          <Ps5/>
          <Footer/>
        </Route>
        <Route path='/LG_Monitor'>
          <Header />
          <Header2 />
          <Lg_Monitor />
          <Footer/>
        </Route>
      <Route path='/orders'>
          <Header />
          <Orders />
          <Footer/>
        </Route> 
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/checkout'>
          <Header />
          <Checkout />
          <Footer/>
        </Route>
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path='/'>
          <Header />
          <Header2 />
          <Home />
          <Footer/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;