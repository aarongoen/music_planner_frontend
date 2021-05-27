import React from 'react';
import PieceForm from './PieceForm';
import PiecesList from './PiecesList';

const DayShow = (props) => {
console.log(props)

let {days} = props
console.log(days)

let day = days[props.match.params.id]
// let day = props.day
console.log(day)

let pieces = day?.pieces
console.log(pieces) 

        let dayDetails = [
        <h3>{ day.name }</h3>,
        <h3>{ day?.date_pretty }</h3>,

        <p><label>Liturgical Year:</label> { day?.year }</p>,
        <p>First Reading: { day?.first_reading } </p>,
        <p>Psalm or Canticle: { day?.psalm_or_canticle }</p>,
        <p>Gospel: { day?.gospel }</p>]

    let dayId = day.id-1
    console.log(dayId) 

    return ( 
      
        <div><p>hello from dayshow</p>

     
        { !days && !pieces
            ? <div>Loading...</div>
            : (
            <>
            
                {dayDetails}
                <PiecesList key={dayId} pieces={pieces} dayId={dayId}/>
                <PieceForm pieces={pieces} day={day} />
            </> )
        }
        </div>
    )

    // const mapStateToProps = (state) => {
    //     return {
    //     days: state.days
    //     }
    // }

}

export default DayShow;

