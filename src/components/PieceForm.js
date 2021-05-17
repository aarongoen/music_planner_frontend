import React, { Component } from 'react'
import { createPiece } from '../redux/actions/pieceActions'
import { connect } from 'react-redux'

class PieceForm extends Component {
    state = {
        title: '',
        composer: '', 
        voicing: '',
        publisher: '',
        collection: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault()
        this.props.createPiece(this.state, this.props.history);
    }
    
    render() {
        return (
            <div>
                <h1>Add a piece</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Title: </label>
                    <input 
                        type="text" 
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title} 
                    /> 

                    <label> Liturgical Day: </label>
                    <select 
                        value={this.state.value} 
                        onChange={this.handleChange}>
                        <option value='First Sunday of Advent'>First Sunday of Advent</option>
                        <option value='Second Sunday of Advent'>Second Sunday of Advent</option>
                        <option value='Third Sunday of Advent'>Third Sunday of Advent</option>
                        <option value='Fourth Sunday of Advent'>Fourth Sunday of Advent</option>
                    </select>
                    
                    <label> Composer (Last, First): </label>
                    <input 
                        type="text" 
                        name="composer" 
                        onChange={this.handleChange}
                        value={this.state.composer} />
                    
                    <label> Voicing: </label>
                    <input 
                        type="text" 
                        name="voicing"                        
                        onChange={this.handleChange}
                        value={this.state.voicing} />
                        
                    <label> Publisher: </label>
                    <input 
                        type="text" 
                        name="publisher" 
                        onChange={this.handleChange}
                        value={this.state.publisher} />
                        
                    <label> Collection: </label>
                    <input 
                        type="text" 
                        name="collection" 
                        onChange={this.handleChange}
                        value={this.state.collection}
                     />
                     <button type="submit"> Add </button>
                </form>
            </div>
        )
    }
}
export default connect(null, { createPiece })(PieceForm);