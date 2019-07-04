import React,{ Component} from 'react';
import { decDebounce, debounce,decArrowDebounce,decDisplayName } from './util'
// 防抖

// 加一个静态属性 displayName
@decDisplayName('CustomExampleDebounce')
class ExampleDebounce extends Component {
    state ={  }
    @decDebounce(1000)  
    handlesubmit() {
        console.log('submit request')
    }
    @decArrowDebounce(1000)
    handleBuy = () => {
        console.log('buy now')
    }
    // handlesubmit = debounce (function() {
    //     console.log('request submit');
    // },1000)
    render() {
        return (
            <div>
                <button onClick={this.handlesubmit}>提交订单</button>
                <button onClick={this.handleBuy}>立即购买</button>
            </div>
        )
    }
}
export default ExampleDebounce;