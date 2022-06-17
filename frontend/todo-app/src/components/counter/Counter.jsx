import { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';


class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div><button className="reSet" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }

    increment(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            })
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            })
    }

    reset() {
        this.setState(
            {
                counter: 0
            }           
        )
    } 
}


class CounterButton extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         counter: 0
    //     }

    //     this.increment = this.increment.bind(this)
    //     this.decrement = this.decrement.bind(this)
    // }

    render() {
        return (
            <div>
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/*<span className="count">{this.state.counter}</span>*/}
            </div>
        )
    }

    // increment() {
    //     // console.log('increment')

    //     this.setState(
    //         {
    //             counter: this.state.counter + this.props.by
    //         }
    //     )
    //     this.props.incrementMethod(this.props.by)
    // }

    // decrement() {

    //     this.setState(
    //         {
    //             counter: this.state.counter - this.props.by
    //         }
    //     )
    //     this.props.decrementMethod(this.props.by)
    // }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;