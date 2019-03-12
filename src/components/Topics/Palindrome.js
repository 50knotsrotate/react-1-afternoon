import React, { Component } from 'react';

class Palindrome extends Component { 

    state = {
        result: 'Enter a thing',
        word: ''
    }

    addingWord = (e) => { 
        this.setState({
            word: e.target.value
        })
    }

    isPalindrome = () => { 
        var word = this.state.word
        var isPalindrome = word.split('').reverse().join('')
        this.setState({
            result: isPalindrome == word.toString()
        })
    }
    render() { 
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Is palindrome?</h4>
                <input className='inputLine' onChange={this.addingWord} value={this.state.word}></input>
                <button className='confirmationButton' onClick={this.isPalindrome}>RACECAR :D!</button>
                <span className='resultsBox'>{this.state.result.toString()}</span>       
            </div>
        )
    }
}

export default Palindrome