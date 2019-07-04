import React from 'react';

class Child extends component {
    handleAntherFun = () =>{
        console.log('handleAntherFun')
    }
    handleClick = (e) => {
        console.log(this);
        this.handleAntherFun();
        console.log(e.target.innerHTML);
    }
    handleChang = (e) => {
        console.log(e.target.value);
        this.setState({
            inputVal: e.target.value
        })
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.props.msg}
                <input type="text"
                  value={this.state.inputVal}
                  placeholder="请输入内容"
                  onChange={this.handleChang}></input>
            </div>
        )
    }
}
export default Child; 