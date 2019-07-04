import React from 'react';

class Child1 extends React.Component {
    state= {
        a: 1,
    }
    // 根据返回值{}更新state
    //或者null不更新
    static getDerivedStateFromProps(props,state) {
        console.log('getDerivedStateFromProps')
        // return null;
        return {
            ...props,
            ...state
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return 888;
    }
    // a === undefined   15.X
    // a === getSnapshotBeforeUpdate() 16.X
    componentDidUpdate(preProps,preState,a) {
        console.log('componentDidUpdate',a)
    }
    handleStateChange = () => {
        this.setState({
            a: 10
        })
    }
    render() {
        console.log('渲染时候 state',this.state)
        return (
            <div>
                <button onClick={this.handleStateChange}>
                    Child1 state
                </button>
                Child1 Component
            </div>
        )
    }
}
export default Child1;