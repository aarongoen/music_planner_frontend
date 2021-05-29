// import React, {PureComponent} from 'react';
// import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import { Link } from 'react-router-dom';
import PiecesListItem from './PiecesListItem';
// class PiecesListNew extends Component {
 
//     render () {
//       return (
//         <div>  
//         <h4>Recommended pieces:</h4>
//             {pieces.map(piece => ( 
//                 <div> 
//                     <li>{piece.title}: {piece.composer}
//                         <PiecesListItem key={piece.id} piece={piece}/>
//                     </li>
//                 </div>
//             ))}
        
//         </div>
//       )
//     }
//   }

const PiecesListNew = ({pieces}) => {

    return (
        <>
        <div>   
        <h4>Recommended pieces:</h4>
        {console.log(pieces)}
            <ul>  
                {pieces.map(piece => <PiecesListItem key={piece.id} piece={piece}/>)}
            </ul>
        </div>
        </>
        )
}

export default PiecesListNew;


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