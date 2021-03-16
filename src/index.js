import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Service from './pages/service';
import User from './pages/User';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/:id" component={User} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
