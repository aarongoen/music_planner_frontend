import React from 'react';
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

export default DaysList;