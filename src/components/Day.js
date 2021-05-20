import React from 'react';
import { Link } from 'react-router-dom';

 function Day({day}) {
    console.log(day)
    return (
        <div>
            <h2><Link to={`/days/${day.id}`}>{day.name}: {day.date_pretty}</Link></h2>
        </div>

    )
};

export default Day;
