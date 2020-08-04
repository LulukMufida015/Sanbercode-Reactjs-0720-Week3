import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 110, date: new Date()
        }
    }

    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({ time: this.props.start })
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        });
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <>
                <div>
                    <h2 style={{ textAlign: "left" }}>Sekarang Jam : {this.state.date.toLocaleTimeString()}.
                    {this.state.time >= 0 &&
                            <span className="mundur" style={{ textAlign: "right" }}>Hitung Mundur : {this.state.time}</span>
                        }
                    </h2>
                </div>
            </>
        )
    }
}

export default Timer