import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Stories from './pages/stories';
import Contact from './pages/contact';
import Login from './pages/login';
import Signup from './pages/signup';
import NotFound from './pages/notFound';
import Header from './components/header';
import Footer from './components/footer';

//  import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/about" component={About} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} exact />

          <Redirect to="/404" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
