import React, { Component } from "react";

export class Timer extends Component {
  state = {
    minutes: 3,
    seconds: 0,
  };

  countDown = () => {
    const { seconds, minutes } = this.state

    if (seconds > 0) {
        this.setState(({ seconds }) => ({
            seconds: seconds - 1
        }))
    }
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(this.myInterval)
        } else {
            this.setState(({ minutes }) => ({
                minutes: minutes - 1,
                seconds: 59
            }))
        }
    }
  };

  componentDidMount() {
    this.myInterval = setInterval(this.countDown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;

    return (
      <div>
        <h1>
          {minutes === 0 && seconds === 0 ? (
            <span>Busted!</span>
          ) : (
            <span>
              Time Remaining: {minutes}:{seconds > 10 ? seconds : `0${seconds}`}
            </span>
          )}
        </h1>
      </div>
    );
  }
}

export default Timer;
