// import React, {PureComponent} from 'react';
// import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import { Link } from 'react-router-dom';
import PiecesListItem from './PiecesListItem';
import { connect } from 'react-redux'
import PiecesList from './PiecesList';
// import { deletePiece } from '.redux/actions/dayActions'

const PiecesListNew = (props) => {
// debugger

    return(   
    <>
        <div>   
        <h4>Recommended pieces:</h4>
        {/* {console.log(pieces)} */}
        {/* {console.log(props)} */}
            <ul>  
              {props.pieces.length > 0 && 
                props.pieces.map(piece => {
                    return <PiecesListItem key={piece.id} piece={piece}/>})
                }
            </ul>
        </div>
        </>
        )
}

export default PiecesListNew;
// export default connect(null, { deletePiece })(PiecesListNew);

            // return (
            // <div>  
            //     <h4>Recommended pieces:</h4>
            //         {pieces.map(piece => ( 
            //             <p>
            //                 <li>{piece.title}: {piece.composer}</li>
            //                 <PiecesListItem key={piece.id} piece={piece}/></p>
            //             ))}
            // </div>
            // )

           
    

// class Parent extends React.Component {

  
//   const Child = () => (
//   <div className='modal'>
//         Hello, World!
//     </div>
//   )
  
//   const app = document.getElementById('app')
//   ReactDOM.render(Parent, app)