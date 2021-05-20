import React, { Component } from "react";
import "./common/pomodoro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faPlayCircle,
  faPauseCircle,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import sound from "./common/a-tone.mp3";
class Pomodoro extends Component {
  state = {
    session: 25,
    rest: 5,
    timer: 1500000,
    running: false,
    interval: null,
    paused: false,
    label: "Session",
  };

  clockify() {
    let minutes = Math.floor(this.state.timer / 1000 / 60);
    let seconds = this.state.timer / 1000 - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  }

  handleSessionControl(time) {
    let { session, timer } = { ...this.state };

    const control = {
      up: function () {
        return (session += 1);
      },
      down: function () {
        return (session -= 1);
      },
    };
    session = control[time]();
    if (session >= 1 && session <= 60) {
      timer = session * 60 * 1000;
      this.setState({ session, timer });
    }
  }

  handleBreakControl(time) {
    let { rest } = { ...this.state };

    const control = {
      up: function () {
        return (rest += 1);
      },
      down: function () {
        return (rest -= 1);
      },
    };
    rest = control[time]();
    if (rest >= 1 && rest <= 60) {
      this.setState({ rest });
    }
  }

  handleClick() {
    document.getElementById("beep").play();
    console.log("Sound");
  }

  handleRun() {
    let { label, timer, running, interval } = this.state;
    timer -= 1000;
    if (timer >= 0 && running) {
      this.setState({ timer });
    } else if (running) {
      this.setState({ running: false, interval: null });
      return clearInterval(interval);
    }

    if (timer === 0 && label === "Session") {
      console.log(true);
      document.getElementById("beep").click();
      setTimeout(() => {
        this.handleBreak();
      }, 1000);
    }

    if (timer === 0 && label === "Break") {
      console.log("break end");
      setTimeout(() => {
        this.setState({ running: false, interval: null });

        this.handleStartPause();
        return clearInterval(interval);
      }, 1000);
    }
  }

  handleBreak() {
    let { rest, timer, paused, interval } = this.state;

    timer = rest * 60 * 1000;
    // timer = 5000;
    if (!paused) {
      console.log("condition 1");
      this.setState({ timer, running: true, label: "Break" });
    } else {
      console.log("condition 2");
      this.setState({ paused: false, running: true });
    }

    if (timer >= 0) {
      interval = setInterval(() => {
        this.handleRun();
      }, 1000);
      this.setState({ interval });
    }
  }

  handleStartPause() {
    let { session, timer, interval, running, paused, label } = {
      ...this.state,
    };

    if (running) {
      this.setState({ paused: true, interval: null, running: false });
      console.log("paused");
      return clearInterval(interval);
    }

    timer = session * 60 * 1000;
    // timer = 3000;
    if (!paused) {
      this.setState({ timer, running: true, label: "Session" });
    } else {
      this.setState({ paused: false, running: true });
    }

    if (timer >= 0) {
      interval = setInterval(() => {
        this.handleRun();
      }, 1000);
      this.setState({ interval });
    }

    if (label === "Break" && timer === 0) {
      console.log("restart session");
      setTimeout(() => {
        this.handleRun();
      }, 1000);
    }
  }

  handleReset() {
    const { interval } = this.state;

    this.setState({
      rest: 5,
      session: 25,
      timer: 1500000,
      running: false,
      interval: null,
      paused: false,
      label: "Session",
    });
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;

    return clearInterval(interval);
  }
  render() {
    const { session, rest, running, label } = this.state;
    return (
      <div id="pomodoro">
        <audio
          src={sound}
          className="clip"
          id="beep"
          preload="auto"
          onClick={() => this.handleClick()}
        />
        <div id="group">
          <div id="break-label">
            <span>Break Length</span>
          </div>
          <div className="control">
            <div
              id="break-increment"
              onClick={() => this.handleBreakControl("up")}
            >
              <FontAwesomeIcon icon={faCaretUp} size="2x" />
            </div>
            <div
              id="break-decrement"
              onClick={() => this.handleBreakControl("down")}
            >
              <FontAwesomeIcon icon={faCaretDown} size="2x" />
            </div>
            <div id="break-length">
              <span>{rest}</span>
            </div>
          </div>
        </div>
        <div id="group">
          <div id="session-label">
            <span>Session Length</span>
          </div>
          <div className="control">
            <div
              id="session-increment"
              onClick={() => this.handleSessionControl("up")}
            >
              <FontAwesomeIcon icon={faCaretUp} size="2x" />
            </div>
            <div
              id="session-decrement"
              onClick={() => this.handleSessionControl("down")}
            >
              <FontAwesomeIcon icon={faCaretDown} size="2x" />
            </div>
            <div id="session-length">
              <span>{session}</span>
            </div>
          </div>
        </div>
        <div id="timer">
          <div id="timer-label">
            <span>{label}</span>
          </div>
          <div id="time-left">{this.clockify()}</div>
          <div className="control_circles">
            <div id="start_stop" onClick={() => this.handleStartPause()}>
              {(() => {
                if (!running) {
                  return <FontAwesomeIcon icon={faPlayCircle} size="lg" />;
                } else {
                  return <FontAwesomeIcon icon={faPauseCircle} size="lg" />;
                }
              })()}
            </div>
            <div id="reset" onClick={() => this.handleReset()}>
              <FontAwesomeIcon icon={faSyncAlt} size="lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
