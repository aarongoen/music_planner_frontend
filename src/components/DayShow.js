import React from 'react';
import PieceForm from './PieceForm';
import PiecesList from './PiecesList';
import { Component } from 'react'
import { connect } from 'react-redux'
import { render } from '@testing-library/react';

class DayShow extends Component {

// let { days, history } = this.state
// console.log(days)
// console.log(history)

// let { dayId } = props.match.params
// console.log(dayId)

// let day = days.find(day => day.id == dayId)
// console.log(day)

// let { pieces } = day
// console.log(pieces)



    render() {
      let dayDetails = [
        <h3>{ day.name }</h3>,
        <h3>{ day?.date_pretty }</h3>,

        <p><label>Liturgical Year:</label> { day?.year }</p>,
        <p>First Reading: { day?.first_reading } </p>,
        <p>Psalm or Canticle: { day?.psalm_or_canticle }</p>,
        <p>Gospel: { day?.gospel }</p>]
        
        return (  
        <>
            {dayDetails}
            <PiecesList pieces={pieces} />
            <PieceForm day={day} handleSubmit={handleSubmit} />
        </>
        );
    }

    const mapStateToProps = (state) => {
        return {
        days: state.days
        }
    }

}
//   export default connect(mapStateToProps)(DayShow)

  export default DayShow; 
