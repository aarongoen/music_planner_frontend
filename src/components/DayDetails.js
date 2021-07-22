import React from 'react'

 const DayDetails = ({day}) => {
    return (
        
        <div>
        {/* hello from DayDetails */}
            <div className="details" >
                    <h3>{ day?.name }: Year {day.year}</h3>
                    <h3>{ day?.date_pretty }</h3>

                    {/* <p><label>Liturgical Year:</label> { day?.year }</p> */}
                    <p>First Reading: { day?.first_reading } </p>
                    <p>Psalm or Canticle: { day?.psalm_or_canticle }</p>
                    <p>Second Reading: {day.second_reading }</p>
                    <p>Gospel: { day?.gospel }</p>
            </div>
        </div>
    
    );
}
export default DayDetails;

