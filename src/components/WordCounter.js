import React, { Component } from 'react'

class WordCounter extends Component {
    // count number of letters in word box
    // create button to handle changing the state based on number of letters
    //show count
 
    state = { 
        word: '',
        count: 0 
    }

// componentDidMount() {    
//     this.setState({word, count})  
// }

onChange = (e) => {
    this.setState({ 
        [e.target.name]: e.target.value
    });
};

onSubmit = e => {
    e.preventDefault()
//get current count and add count of current word
// debugger
    this.setState({count: this.state.count 
        + this.state.word.length
    });
    this.setState({word: ""})
};

    render() {
        let {count} = this.state
        // let {word} = this.state
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <p><label> word: </label>
                <input 
                    type="text"
                    name="word"
                    onChange={this.onChange}
                    value={this.state.word}
                />
                <button onClick={this.onSubmit}> Add </button>
                </p>

                <div>  
                    <label>accumlulated word length: </label>
                    {count} 
                </div>
            </form>
            </div>
        )
    }
}
export default WordCounter