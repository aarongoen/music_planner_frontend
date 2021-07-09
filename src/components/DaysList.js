import React from 'react';
// import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import { Link } from 'react-router-dom';


const DaysList = ( props ) => {
    let { days } = props
    const renderDays = days.days.map(day =>
    <p key={day.id}><Link to={`/days/${day.id}`}>{day.name}</Link></p>
    );
        return (
            <div>
            <h1>Sundays of Advent</h1>
            <p>Select a day to begin planning.</p>
                {renderDays}
            </div>
        );   
}

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         days: state.days
//     }
// }


// export default connect(mapStateToProps, { getDays })(DaysList)

export default DaysList;