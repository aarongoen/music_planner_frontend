import React, { lazy, Suspense } from 'react';
import PieceForm from './PieceForm';
// import PiecesListNew from './PiecesListNew';
// import PiecesList from './PiecesList';
import {showDay} from '../redux/actions/dayActions';
import { connect } from 'react-redux';
import DayDetails from './DayDetails';

const PiecesListNew = lazy(() => import('./PiecesListNew'))

const DayShow = (props) => {
console.log(props)

let {days} = props
console.log(days)

let day = days[props.match.params.id]
// let {day} = props
console.log(day)
let pieces = days[props.match.params.id].pieces

// let pieces = day?.pieces
// console.log(pieces) 



    let dayId = day?.id-1

    return ( 

        <div className="DayShow">
        {/* <p>hello from dayshow</p> */}

            {/* <> */}
                <DayDetails day={day}/>
                <Suspense fallback={<div>Loading pieces...</div>} >
                    <PiecesListNew pieces={pieces} dayId={dayId}/>
                </Suspense>
                <PieceForm pieces={pieces} day={day} />
            {/* </>  */}
        </div>
    )

}

const mapStateToProps = (state) => {
        return {
        days: state.days
        }
    }

export default connect (mapStateToProps, {showDay})(DayShow);

