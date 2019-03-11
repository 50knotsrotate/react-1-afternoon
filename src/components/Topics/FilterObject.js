import React, { Component } from 'react';


class FilterObject extends Component {

    state = {
        keyWord: '',
        originalObject:
            [
                {
                    name: 'Declan',
                    breed: 'Irish Wolfhound',
                    is_good_boy: true,
                    is_mamas_boy: true
                },
                {
                    name: 'Musgy',
                    likes_batteries: true,
                    is_bork: true
                }
          
            ],
        updatedObject: undefined
    }
    updateKeyword = (e) => {
        this.setState({
            keyWord: e.target.value
        })

    }
    
    getObjects = () => {
        let filteredObjects = [...this.state.originalObject]
        filteredObjects = filteredObjects.filter(dog => dog[this.state.keyWord])
        console.log(filteredObjects)
        this.setState({
            updatedObject: filteredObjects
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <span className='puzzleText'> {JSON.stringify(this.state.originalObject)}</span>
                <input className='inputLine' onChange={this.updateKeyword}></input>
                <button className='confirmationButton' onClick={this.getObjects}>Filter</button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.updatedObject)}</span>
            
            </div>
            
        )
    }
}

export default FilterObject