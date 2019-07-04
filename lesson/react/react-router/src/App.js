import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import './App.css';

function Index() {
  return (
    <div>Home</div>
  )
}

function About() {
  return (
    <div>About</div>
  )
}
function User() {
  return (
    <div>User</div>
  )
}
function Protect() {
  return (
    <div>Protect</div>
  )
}
function Login() {
  return (
    <div>Login</div>
  )
}
 
/**
 * 进入页面之前
 * <privateRoute path="/user" component={} />
 */
function PrivateRoute(props) {
  const { path, component: Component } = props;
  return (
    <Route path={path} render={() => {
      return true ? <Component></Component> :
      <Redirect to={{
        pathname: "/login"
      }}></Redirect>
    }}></Route>
  )
}
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/protect">protect page</Link>
        </li>
      </ul>
      {
        true ? 
        <Route path="/" exact component={Index}>
        </Route> : <div>no router</div>   
      }
      <Route path="/about" component={About}></Route>
      {/* <Route path="/user" component={User}></Route>  */}
      <Route path="/login" component={Login}></Route>

      {/* <PrivateRoute path="/post" component={PrivateRoute}></PrivateRoute> */}
      <PrivateRoute path="/user" component={User}></PrivateRoute>

      <Route path="/protect" render={() => {
       return false ? <Protect></Protect> :
        <Redirect to={{
          pathname: "/login",
          state: { from: '/protect' }
        }}></Redirect>
      }}></Route>
    </Router>
  )
}
export default App;
