
import React, { Component } from 'react';
import { _RouterContext as RouterContext} from '../react-router/index'

class Link extends Component {
    state = {  }
    render() { 
        return (  
            <RouterContext.Consumer>
                {
                    context => {
                        const { history } = context
                        const { to } = this.props
                        return (
                            <a href={ to } onClick={(event) => {
                                event.preventDefault()
                                history.push()
                            }}>
                                { this.props.children }
                            </a>
                        )
                    }
                }
            </RouterContext.Consumer>
        );
    }
}
 
export default Link;