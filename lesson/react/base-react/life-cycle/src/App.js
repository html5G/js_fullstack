import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context';
import Context1 from './Context1';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    const { showChild } = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  handleChildPropsChange = () => {
    let { count } = this.state;
    // count++;
    this.setState({
      count
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = `new String Ref`;
    this.methodRef.innerHTML = 'new method Ref';
    this.objRef.current.innerHTML = 'new Object Ref';
  }
  render() {
    const { count, showChild } = this.state;
    return (
      <div>
        <span ref="stringRef">react ref</span>
        <span ref={(ref) => this.methodRef = ref}>methods Ref</span>
        <span ref={this.objRef}>object ref</span>
        {/* innerHTML */}
        <div dangerouslySetInnerHTML={{
          __html: `<strong>strong</strong>`
        }}></div>
        <button onClick={this.handleChildPropsChange}>
          child component props cahnge
        </button>
        <button onClick={this.handleToggleChild}>
          toggle child
        </button>
        {
          !showChild ?
          <Child count={count}/> : <Child1 count={count}/>
        }
        {/* 自定义内容 */}
        <Context>小华
          <p>姓名：</p> 19
          <p>年龄：</p> 
        </Context>
        <p>16.X</p>
        <Context1></Context1>
      </div>
    )
  }
}

export default App;
