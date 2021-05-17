import React from 'react'

export default function Day({day}) {
    console.log(day)
    return (
        <div>
            <Link to={`http//:localhost:4000/days/${day.id}`}>{day.name}: {day.date_pretty}</Link>
        </div>

    )
}
