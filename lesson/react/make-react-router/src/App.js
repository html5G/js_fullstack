import React from 'react';
import { BrowserRouter, Route, Link } from './react-router-dom/index'
import './App.css';

function Home() {
  return 'Home'
}
function Detail() {
  return 'Detail'
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/detail">Detail</Link></li>
        </ul>
        <Route path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </BrowserRouter>
    )
  }
}

export default App;
