import React, { Component } from 'react';

class Sum extends Component {
    state = {
        number1: null,
        number2: null,
        num: null
    }

    updateNumber1 = (e) => { 
        this.setState({
            number1: e.target.value
        })
    }

    updateNumber2 = (e) => { 
        this.setState({
            number2: e.target.value
        })
    }

    sum = () => { 
        var sum = parseInt(this.state.number1) + parseInt(this.state.number2)
        this.setState({
            num: sum,
            number1: '',
            number2: ''
        })
        console.log(this.state.num)
    }

  
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>I do adding good!</h4>
                <input className='inputLine' onChange={this.updateNumber1} value={this.state.number1}></input>
                <input className='inputLine' onChange={this.updateNumber2} value={this.state.number2}></input>
                <button className='confirmationButton' onClick={this.sum}>$0.99 (Free addition with subscription to Pro)</button>
                <h4>Sum: {this.state.num}</h4>
                
            </div>
        )
    }
}

export default Sum;

