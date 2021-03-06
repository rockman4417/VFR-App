import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import GettingStarted from "./components/GettingStarted";
import SignUp from "./components/SignUp";
import NewBusiness from "./components/NewBusiness";
import Search from "./components/Search";
// import Car from './components/Car'
// import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"

// Write ProtectedRoute function heref
const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log({ ...rest });
  return (
    <Route
      {...rest}
      render={(props) => {
        return checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log(cookie);

  return cookies["loggedIn"] ? true : false;
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={GettingStarted} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/newbusiness" component={NewBusiness} />
      <Route path="/search" component={Search} />
      {/* <ProtectedRoute exact path="/" component={Home} /> */}
      {/* <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} /> */}
    </Switch>
  );
};

export default Router;
