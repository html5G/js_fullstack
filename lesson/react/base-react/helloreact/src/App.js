import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    msg: 'from state'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 'change msg'
      })
    },3000)
  }
  renderFooter = () => {
    return (
      <footer>
        foot
      </footer>
    )
  }
  render() {
    const { msg } = this.state;
    const isRed = true;
    const red = 'red';
    const Main = (<p>main</p>);
    const lists = [1,2,3,4,5];
    const listNode =  lists.map((list,index) => <li key={index}>{list}</li>);
    return (
      <div className={isRed ? red : '' }>hello world
        {
           msg
        }
        {
          isRed ?
          <span>red</span> : <span>nored</span>
        }
        <ul>
          {
           listNode
          }
        </ul>
        {
          Main
        }
        {this.renderFooter()}
      </div>
      
    )
  }
}
export default App;
