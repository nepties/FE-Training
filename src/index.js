import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    }
  }

  render() {
    return (
      <button
        className="square"
        id={this.props.id}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sudoku : this.props.sudoku,
    }
  }

  renderSquare(id, value) {
    return <Square id={id} key={"square" + id} value ={value}/>;
  }

  renderRow(size, rowNum) {

    let row = Array(size).fill(null);
    for (let i = 0; i < size; i++) {
      let squareNum = i + size * rowNum
      row[i] = this.renderSquare(squareNum + 1, this.state.sudoku[squareNum]);
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
      스도쿠 Array 생성
      스도쿠 Array의 기본값 넣기
      버튼 선택 이벤트 넣기
      버튼 값 입력 이벤트 넣기
      스도쿠 Array의 값 변경
      오류 검산?

      큰 상자 겹쳐서 생성
*/