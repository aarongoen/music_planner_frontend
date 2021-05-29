import React from 'react';
import PieceForm from './PieceForm';
import PiecesListNew from './PiecesListNew';
// import PiecesList from './PiecesList';
import { connect } from 'react-redux';
import DayDetails from './DayDetails';

const DayShow = (props) => {
console.log(props)

let {days} = props
console.log(days)

let day = days[props.match.params.id]
// let day = props.day
console.log(day)

let pieces = day?.pieces
console.log(pieces) 



    let dayId = day?.id-1


    return ( 

        <div>
        {/* <p>hello from dayshow</p> */}

        {  !pieces ? <div>Loading...</div> :
            <>
                <DayDetails day={day}/>
                <PiecesListNew pieces={pieces} dayId={dayId}/>
                <PieceForm pieces={pieces} day={day} />
            </> 
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

