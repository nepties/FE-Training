import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      editable: '',
    }

    if (props.value == null) {
      this.state.editable = ' editable';
    }

  }

  render() {
    let borderClass = '';

    if (this.props.id % 3 === 2 && this.props.id % 9 !== 8) {
      borderClass += ' right-boundary';
    }

    if (Math.floor(this.props.id / 9) === 2 || Math.floor(this.props.id / 9) === 5) {
      borderClass += ' bottom-boundary';
    }

    return (
      <button
        className={"square" + this.state.editable + borderClass}
        id={this.props.id}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sudoku : this.props.sudoku,
      selectedBoxId : -1,
    }
  }

  handleClick(i) {
    this.setState({selectedBoxId: i});
  }

  handleKeyDown(e) {
    if (e.keyCode >= 49 && e.keyCode <= 57) {
      console.log(e.keyCode - 48);
    }
  }

  updateSudoku(value) {
    const sudoku = this.state.sudoku.splice();
    sudoku[this.selectedBoxId] = value;
    this.setState({sudoku: sudoku});
  }


  renderSquare(id, value) {
    return (
      <Square
        id={id}
        key={"square" + id}
        value={value}
        onClick={() => this.handleClick(id)}
      />
    );
  }

  renderRow(size, rowNum) {

    let row = Array(size).fill(null);
    for (let i = 0; i < size; i++) {
      let id = i + size * rowNum
      row[i] = this.renderSquare(id, this.state.sudoku[id]);
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
      <div onKeyDown={this.handleKeyDown}>
        {board}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    let sudoku = [
      1,    null, null, 4,    8,    9,    null, null, 6,
      7,    3,    null, null, null, null, null, 4,    null,
      null, null, null, null, null, 1,    2,    9,    5,
      null, null, 7,    1,    2,    null, 6,    null, null,
      5,    null, null, 7,    null, 3,    null, null, 8,
      null, null, 6,    null, 9,    5,    7,    null, null,
      9,    1,    4,    6,    null, null, null, null, null,
      null, 2,    null, null, null, null, null, 3,    7,
      8,    null, null, 5,    1,    2,    null, null, 4,
    ];

    return (
      <div className="game">
        <div className="game-board">
          <Board sudoku={sudoku}/>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


/*  TODO : 
      버튼 값 입력 이벤트 넣기
      오류 검산?
*/