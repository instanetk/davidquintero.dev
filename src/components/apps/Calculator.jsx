import React, { Component } from 'react';
import './common/calc.css';

class Calculator extends Component {
  state = {
    display: [0],
    hold: [0],
    operand: null,
    sign: false,
  };

  current() {
    if (Array.isArray(this.state.display)) {
      return parseFloat(this.state.display.join(''));
    } else {
      return parseFloat(this.state.display);
    }
  }

  handleNumber(number) {
    const current = [...this.state.display];
    if (current[0] === 0 && current[0] % 1 === 0) {
      // console.log("handleNumber case 1", typeof current[0]);
      current.shift();
      this.setState({ display: [number] });
    } else if (current.length !== 9) {
      // console.log("handleNumber case 2", typeof current[0]);
      const update = current.concat(number).join('');
      if (number === 0) {
        this.setState({ display: [update] });
      } else {
        this.setState({ display: [parseFloat(update)] }); // passes 12
      }
    }
  }

  handleDecimal() {
    const current = [...this.state.display];
    let index;
    // console.warn(
    //   "decimal type",
    //   typeof current[0],
    //   Array.isArray(current),
    //   current[0]
    // );

    if (typeof current[0] === 'string') {
      index = current[0].split('').indexOf('.');
      // console.error("split", index);
    }

    console.log('is int?', Number.isInteger(current[0]));
    if (Number.isInteger(current[0]) || index === -1) {
      const update = current.concat('.').join('');
      console.log('update', update);
      this.setState({ display: [update] });
      console.log('is int?', Number.isInteger(current[0]));
    }
  }

  handleClear() {
    this.setState({
      display: [0],
      hold: [0],
      operand: null,
      sign: false,
    });
  }

  handleSign() {
    const current = [...this.state.display];
    let result;
    if (current[0] === 0) {
      result = '-0';
    } else {
      result = current * -1;
    }
    // console.log(result);
    if (!this.state.sign) {
      this.setState({ sign: true, display: [result] });
    } else {
      this.setState({ sign: false, display: [result] });
    }
  }

  handlePercent() {
    const result = this.current() / 100;
    this.setState({ display: [result] });
  }

  handleOperation(op) {
    const { display, hold, operand, sign } = this.state;
    // console.log("handleOp", display[0], hold[0], operand);

    if (sign === true) this.handleSign();

    const operation = {
      add: function (a, b) {
        return a + b;
      },
      subtract: function (a, b) {
        console.error('subtract');
        return a - b;
      },
      multiply: function (a, b) {
        return a * b;
      },
      divide: function (a, b) {
        return a / b;
      },
    };

    if (hold[0] === 0 && operand === null) {
      // console.log("operation case 1");
      this.setState({
        display: [0],
        operand: op,
        hold: [this.state.display[0]],
      });
    } else if (hold[0] !== 0 && display[0] !== 0 && hold[0] !== 0 && display[0] !== '-0') {
      // console.log(
      //   "operation case 2",
      //   display[0],
      //   typeof display[0],
      //   Boolean(hold[0] !== 0 && display[0] !== 0),
      //   Boolean(hold[0] !== 0 && operand !== "subtract"),
      //   operand
      // );
      const result = operation[operand](hold[0], this.current());
      this.setState({ display: [0], operand: op, hold: [result], sign: false });
    } else {
      // console.log("operation case 3");
      this.setState({ operand: op });
    }
  }

  render() {
    const display = () => {
      if (typeof this.state.display[0] === 'string') return this.state.display;

      return Number(this.state.display).toLocaleString('en-US', {
        maximumSignificantDigits: 9,
      });
    };
    const hold = () => {
      if (typeof this.state.hold[0] === 'string') return this.state.hold;

      return Number(this.state.hold).toLocaleString('en-US', {
        maximumSignificantDigits: 9,
      });
    };

    const ac = this.state.display[0] === 0 && this.state.hold[0] === 0 ? 'AC' : 'C';

    const show = () => {
      if (hold === '0') {
        // console.log(true, "display: ", display(), "hold: ", hold());
        return display();
      } else if (hold !== '0' && display() !== '0') {
        // console.log(false, "display: ", display(), "hold: ", hold());
        return display();
      } else {
        // console.log("show: hold");
        return hold();
      }
    };

    let result;
    let length = show().toString().split('').length;

    switch (length) {
      case 11:
        result = 'result-eleven';
        break;
      case 10:
        result = 'result-nine';
        break;
      default:
        result = 'result';
    }
    // console.log(length, result);

    return (
      <div>
        <div id="calculator">
          <div id="display">
            <span className={result}>{show()}</span>
          </div>

          <div id="functions">
            <div id="clear" onClick={() => this.handleClear()}>
              <div className="buttonfunc">{ac}</div>
            </div>
            <div id="sign" onClick={() => this.handleSign()}>
              <div className="buttonfunc">
                <span>+/-</span>
              </div>
            </div>
            <div id="percent" onClick={() => this.handlePercent()}>
              <div className="buttonfunc">%</div>
            </div>
          </div>
          <div id="operators">
            <div id="divide" onClick={() => this.handleOperation('divide')}>
              <div className="button">÷</div>
            </div>
            <div id="multiply" onClick={() => this.handleOperation('multiply')}>
              <div className="button">x</div>
            </div>
            <div
              id="subtract"
              onClick={() => {
                if (this.state.display[0] === 0 && this.state.operand !== 'subtract') {
                  this.handleSign();
                } else {
                  this.handleOperation('subtract');
                }
              }}>
              <div className="button">-</div>
            </div>
            <div id="add" onClick={() => this.handleOperation('add')}>
              <div className="button">+</div>
            </div>
            <div id="equals" onClick={() => this.handleOperation('equals')}>
              <div className="button">=</div>
            </div>
          </div>
          <div id="numbers">
            <div id="seven" onClick={() => this.handleNumber(7)}>
              <div className="button">7</div>
            </div>
            <div id="eight" onClick={() => this.handleNumber(8)}>
              <div className="button">8</div>
            </div>
            <div id="nine" onClick={() => this.handleNumber(9)}>
              <div className="button">9</div>
            </div>
            <div id="four" onClick={() => this.handleNumber(4)}>
              <div className="button">4</div>
            </div>
            <div id="five" onClick={() => this.handleNumber(5)}>
              <div className="button">5</div>
            </div>
            <div id="six" onClick={() => this.handleNumber(6)}>
              <div className="button">6</div>
            </div>
            <div id="one" onClick={() => this.handleNumber(1)}>
              <div className="button">1</div>
            </div>
            <div id="two" onClick={() => this.handleNumber(2)}>
              <div className="button">2</div>
            </div>
            <div id="three" onClick={() => this.handleNumber(3)}>
              <div className="button">3</div>
            </div>
            <div id="zero" onClick={() => this.handleNumber(0)}>
              <div className="zero">0</div>
            </div>
            <div id="decimal" onClick={() => this.handleDecimal()}>
              <div className="dot">.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
