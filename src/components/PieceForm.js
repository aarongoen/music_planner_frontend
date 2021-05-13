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
        console.log('from submit')

        this.props.createPiece(this.state, this.props.history)
        this.props.history.push("/days");
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
                        value={this.state.name} 
                    /> 
                    
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