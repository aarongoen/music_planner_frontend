import React, { Component } from 'react'
import { createPiece } from '../redux/actions/pieceActions'
import { connect } from 'react-redux'
import DayShow from './DayShow'
class PieceForm extends Component {

    state = {
        title: '',
        composer: '',
        voicing: '',
        publisher: '',
        collection: ''  
    }

    componentDidMount() {
     const {title, composer, voicing, publisher, collections} = this.props
        this.setState({title, composer, voicing, publisher, collections})
    }
        
onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    
    const piece = {
        title: this.state.title,
        composer: this.state.composer,
        voicing: this.state.voicing,
        publisher: this.state.publisher,
        collection: this.state.collection
    }; 

    let day = this.props.day
    console.log(day)
    // this.props.dispatch({type: 'CREATE_PIECE_SUCCESS', piece: this.state})
    // this.props.onSubmit(this.state)
            this.props.createPiece();

};


onChange = (e) => {
    console.log(this)
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
};

render() {
    console.log(this.state)
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

                    {/* <div 
                        type="text"
                        name="day"
                        value={this.props.day.name} 
                    /> */}
                 
                    <p><label> Composer (Last, First): </label>
                    <input 
                        type="text" 
                        name="composer" 
                        onChange={this.onChange}
                        value={this.props.composer} />
                        </p>
                    
                    <p><label> Voicing: </label>
                    <input 
                        type="text" 
                        name="voicing"                        
                        onChange={this.onChange}
                        value={this.props.voicing} />
                        </p>
                        
                    <p><label> Publisher: </label>
                    <input 
                        type="text" 
                        name="publisher" 
                        onChange={this.onChange}
                        value={this.props.publisher} />
                        </p>
                        
                    <p><label> Collection: </label>
                    <input 
                        type="text" 
                        name="collection" 
                        onChange={this.onChange}
                        value={this.props.collection}
                     />
                     </p>
                     <button onClick={this.onSubmit} type="submit"> Add </button>
                </form>
            </div>
        )
    }
}

export default PieceForm;
// export default connect(null, { createPiece })(PieceForm);