import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Porfolio';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import './assets/fonts/HelloDaisy.ttf'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App';
import Airplane from './Airplane';

ReactDOM.render(
  <React.StrictMode>  
   <Router>
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>
        <Route exact path="/shoot-airplane">  
          <Airplane />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
