import React, { Component } from 'react'
import { useParams } from 'react-router'

export default class DayShow extends Component {
    state = {
        day: {},
    }

    function dayDetails() {
        let match = useRouteMatch();
    
      }
    
    componentDidMount() {
    let { id } = useParams();
debugger
    fetch(`http://localhost:3000/days/${{id}}`)
        .then(r => r.json())
        .then(data => this.setState({ day: data}))
    }

    render() {
    return (
        <div>
        <h2> DayShow </h2>
        
                {/* <Link to={`${match.url}/`}
        
        Name: {this.state.day.name}   */}     
      </div> 
    )
    }
}
