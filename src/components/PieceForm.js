import React, { Component } from 'react'
import { createPiece } from '../redux/actions/pieceActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';
class PieceForm extends Component {
// const { pieceId } = match.params

    state = {
            title: '',
            composer: '',
            voicing: '',
            publisher: '',
            collection: '',
            day_id: '' 
    }

componentDidMount() {
    const {title, composer, voicing, publisher, collections, day_id} = this.props
    console.log(this.props)
    this.setState({title, composer, voicing, publisher, collections, day_id})
    console.log(this.state)
}
        
onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
};

onSubmit = e => {
    e.preventDefault()
    console.log('props', this.props)
    console.log('history', this.props.history)
    
    const pieceData = {
        piece: {  
            title: this.state.title,
            composer: this.state.composer,
            voicing: this.state.voicing,
            publisher: this.state.publisher,
            collection: this.state.collection,
            day_id: this.props.day.id
        }
    }; 
    console.log(pieceData)

    // const {history} = this.props
    // console.log(history)
    let day_id = this.props.day.id
    console.log(day_id)

    this.props.createPiece(this.state, day_id);
    // this.setState({ piece: ''
    // })
    // history.push(`/days/${dayId}`)
};

render() {
    // console.log(this.props)
    // console.log(history)

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

// export default PieceForm;
export default connect(null, { createPiece })(PieceForm);