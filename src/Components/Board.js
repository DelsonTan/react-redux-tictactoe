import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    render() {
        return (
        <div className="Board">
            Board!
            <Square/>
        </div>
        )
    }
}

export default Board;