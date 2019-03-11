import React, { Component } from 'react';


class EvenAndOdd extends Component {

    state = {
        array: '',
        evensArray: undefined,
        oddsArray: undefined
    }

    updateArray = (event) => {
        var newArray = event.target.value.split(',').map(number => parseInt(number))

        this.setState({
            array: newArray
        })
    }

    submitArray = () => { 
        var oddsArray = [...this.state.array].filter(number => number % 2 == 1);
        var evensArray = [...this.state.array].filter(number => number % 2 == 0)
        
        this.setState({
            oddsArray,
            evensArray,
            array: ''
        })
        document.getElementsByClassName('inputLine')[0].value = ''
    }


    render() { 
        return (
          <div className="puzzleBox evenAndOddPB">
            <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={this.updateArray}></input>
                <button className="confirmationButton" onClick={this.submitArray}> Split </button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evensArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddsArray)}  </span>
          </div>
             
        )
    }
}

export default EvenAndOdd;