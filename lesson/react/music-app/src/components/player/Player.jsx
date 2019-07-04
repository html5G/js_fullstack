import React, { Component } from 'react';

class Player extends Component {
    state = {  }
    render() { 
        console.log('props',this.props)
        return ( 
            <div>
                Player
            </div>
         );
    }
}
 
export default Player;