import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from 'react-router-dom';
// import Header from './components/header';
// import Footer from './components/footer';
// import About from './pages/about';
// import Service from './pages/service';
// import User from './pages/user';

// const Routing = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/service" component={Service} />
//         <Route exact path="/user/:id" component={User} />
//         <Redirect to="/" />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
