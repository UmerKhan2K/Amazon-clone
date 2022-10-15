import './App.css';
import Header from './Header';
import Home from './Home';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise=loadStripe('pk_test_51Lr2ixEncbzmVlyqomkVbBQfVfTfT6t8vRTmhTBv2rNpiA6tcBUnz6F0gkSa7WbagXmTiIelsnaz1KXWxa0l9aFF00KcWpOic8')

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('The user ',authUser);
      if(authUser){
        //when user loggedin
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }
      else{
        //when user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
      
        <Routes>
        <Route path='/login' element={<Login/>}>
          </Route>
          <Route path='/orders' element={[<Header/>,<Orders/>]}>
          </Route>
        <Route path='/checkout' element={[<Header/>,<Checkout/>]}>
          </Route>
        <Route path='/payment' element={[<Header/>,
        <Elements stripe={promise}>
           <Payment/>
        </Elements>
        ]}>
          </Route>
        <Route path='/' element={[<Header/>,<Home/>] }>
          </Route>
          
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
