import React from 'react';
// import React, { Component } from 'react'
// import { getDays } from '../redux/actions/dayActions'
// import { connect } from 'react-redux'
// import Day from './Day'
import { Link } from 'react-router-dom';

const DaysList = ({ days }) => {
    const renderDays = Object.keys(days).map(dayId =>
    <p key={dayId}><Link to={`/days/${dayId}`}>{days[dayId].name}</Link></p>
    );
        return (
            <div>
                {renderDays}
            </div>
        );   
}


// export default connect(mapStateToProps, { getDays })(daysList)

export default DaysList;