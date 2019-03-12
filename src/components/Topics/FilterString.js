import React, { Component } from 'react';

class FilterString extends Component { 
    
    state = {
        updadingName: '',
        names: [
            'Jessica',
            'Paul',
            'Pat',
            'Paula',
            'Pablo',
            'Mike',
            'Michelle',
            'Kayla',
            'Kim',
            "John"
        ],
        filteredNames: [

        ]
    }

    updatingName = (e) => { 
        this.setState({
            updatingName: e.target.value
        })
    }

    filterNames = () => { 
        var filteredNames = [...this.state.names]
        filteredNames = filteredNames.filter(name => name.indexOf(this.state.updatingName) != -1)
        this.setState({
            filteredNames
        })
    }
    render(){ 
    return (
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <h6>{JSON.stringify(this.state.names)}</h6>
            <input className='inputLine' onChange={this.updatingName} value={this.state.updatingName}></input>
            <button className='confirmationButton' onClick={this.filterNames}>Do da filterrrrrrr</button>
            <span className='resultsBox'>{JSON.stringify(this.state.filteredNames)}</span>
        </div>
        )
    }
}

export default FilterString;