import React, { Component } from 'react'
import { createPiece } from '../redux/actions/pieceActions'
import { connect } from 'react-redux'
class PieceForm extends Component {
    state = {
            title: '',
            composer: '',
            voicing: '',
            publisher: '',
            collection: '',
            day_id: '' 
    }

componentDidMount() {
    const {title, composer, voicing, publisher, collection, day_id} = this.props
    
    this.setState({title, composer, voicing, publisher, collection, day_id})
}
        
onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};

onSubmit = e => {
    e.preventDefault()
    
    const piece = {
            title: this.state.title,
            composer: this.state.composer,
            voicing: this.state.voicing,
            publisher: this.state.publisher,
            collection: this.state.collection,
            day_id: this.props.day.id
        }

    this.props.createPiece(piece, piece.day_id);

    this.setState({
        title: "",
        composer: "",
        voicing: "",
        publisher: "",
        collection: ""
        });
};

render() {
        return (
            <div>
                <h3>Add a piece</h3>
                <form onSubmit={this.onSubmit}>
                    <p><label> Title: </label>
                    <input 
                        type="text" 
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title} 
                    /> </p>

                    <div>  
                        <label>Day: </label>
                        {this.props.day.name} 
                    </div>
       
                    <p><label> Composer (Last, First): </label>
                    <input 
                        type="text" 
                        name="composer" 
                        onChange={this.onChange}
                        value={this.state.composer}
                    />
                        </p>
                    
                    <p><label> Voicing: </label>
                    <input 
                        type="text" 
                        name="voicing"                        
                        onChange={this.onChange}
                        value={this.state.voicing}
                    />
                        </p>
                        
                    <p><label> Publisher: </label>
                    <input 
                        type="text" 
                        name="publisher" 
                        onChange={this.onChange}
                        value={this.state.publisher}
                    />
                        </p>
                        
                    <p><label> Collection: </label>
                    <input 
                        type="text" 
                        name="collection" 
                        onChange={this.onChange}
                        value={this.state.collection}
                        // ref={(el) => (this.collection = el)}
                     />

                     </p>
                     <button onClick={this.onSubmit} type="submit"> Add </button>
                </form>
            </div>
        )
    }
}

export default connect(null, { createPiece })(PieceForm);