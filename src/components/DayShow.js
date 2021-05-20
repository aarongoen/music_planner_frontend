import React from 'react';
import PiecesList from './PiecesList';

// import React, { Component } from 'react'
// import { connect } from 'react-redux'

    
// class DayShow extends Component {

//      render() {
//         const dayId = match.params.dayId
//         const parseDayID = this.props.location.pathname.split('/');
//         console.log(parseDayID[2])

//         return days.filter(day => day.id === dayId);
//     }

//         // const showDay = this.dayDetails();

//         return (
//             <div>
//                     {showDay.name}
//                     {showDay.date_pretty}
//                     {showDay.date_pretty}
//                     {showDay.year}
//                     {showDay.first_reading}
//                     {showDay.psalm_or_canticle}
//                     {showDay.gospel}
//                     {showDay.pieces.map(p => p.name)}
//                     {showDay.date_pretty}
//             </div>
//         )
//     }





const DayShow = ({match, days}) => {

let day = days[match.params.dayId]

    return (  
 
      <div>
        <h3>{ day?.name }</h3>
        { day?.date_pretty }
        <h3>Liturgical Year:</h3> { day?.year }
        <h3>First Reading:</h3> { day?.first_reading } 
        <h3>Psalm or Canticle:</h3> { day?.psalm_or_canticle }
        <h3>Gospel:</h3>{ day?.gospel }
        <h3>Pieces:</h3> 
        <PiecesList pieces={day?.pieces} />
      </div>
    );
  }

//   const mapStateToProps = state => {
//     return {
//       days: state.days
//     }
// }
//   export default connect(mapStateToProps)(DayShow)

  export default DayShow; 
