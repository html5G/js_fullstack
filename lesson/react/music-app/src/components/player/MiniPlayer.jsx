import React, { Component } from 'react';
import './miniPlayer.styl'

class MiniPlayer extends Component {
    state = {  }
    handleShow = () => {
        if (true || this.props.song.url ) {
            this.props.showMiniPlayer();
        }
    }
    render() { 
        const { showStatus } = this.props;
        let playeStyle = {};
        if (showStatus) playeStyle = { display: 'none'}
        return (
            <div className="mini-player" style={playeStyle}
            onClick={ this.handleShow }
            >
                MiniPlayer
            </div>
        );
    }
}
 
export default MiniPlayer;