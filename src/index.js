import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" id={this.props.value}>
        
      </button>
    );
  }
}

class Board extends React.Component {

  renderSquare(id) {
    return <Square value={id} key={"square" + id} />;
  }

  renderRow(size, rowNum) {

    let row = Array(size).fill(null);
    for (let i = 0; i < size; i++) {
      row[i] = this.renderSquare(i + size * rowNum + 1);
    }

    return (
      <div className="board-row" key={"rowNum" + rowNum}>
        {row}
      </div>
    )
  }

  render() {
    const size = 9;

    let board = Array(size).fill(null);
    for (let i = 0; i < size; i++) {
      board[i] = this.renderRow(size, i);
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
