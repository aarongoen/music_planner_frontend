import React, { Component } from 'react'
import { createPiece } from '../redux/actions/pieceActions'
import { connect } from 'react-redux'
import { render } from '@testing-library/react';

class PieceForm extends Component {
//  console.log(props)

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    };

    // handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(this.state)
    //     this.props.createPiece(this.state, this.state.dayId);
    // }
render() {
   

        return (
            <div>
                <h3>Add a piece</h3>
                <form onSubmit={(e) => this.props.handleSubmit({ piece: e.target.value})}>
                    <p><label> Title: </label>
                    <input 
                        type="text" 
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title} 
                    /> </p>

                    <p><label> Liturgical Day: </label>
                        <div 
                            type="text"
                            name="day"
                            value={this.props.day.name} 
                    /></p>
                 
                    <p><label> Composer (Last, First): </label>
                    <input 
                        type="text" 
                        name="composer" 
                        onChange={this.handleChange}
                        value={this.props.composer} />
                        </p>
                    
                    <p><label> Voicing: </label>
                    <input 
                        type="text" 
                        name="voicing"                        
                        onChange={this.handleChange}
                        value={this.props.voicing} />
                        </p>
                        
                    <p><label> Publisher: </label>
                    <input 
                        type="text" 
                        name="publisher" 
                        onChange={this.handleChange}
                        value={this.props.publisher} />
                        </p>
                        
                    <p><label> Collection: </label>
                    <input 
                        type="text" 
                        name="collection" 
                        onChange={this.handleChange}
                        value={this.props.collection}
                     />
                     </p>
                     <button onClick={this.handleSubmit} type="submit"> Add </button>
                </form>
            </div>
        )
    }
}
    const mapStateToProps = (state) => {
        return {
          days: state.days
        }
    }

export default connect(null, { createPiece })(PieceForm);