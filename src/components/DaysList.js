import React, { Component } from 'react'
import { getDays } from '../redux/actions/dayActions'
import { connect } from 'react-redux'
import Day from './Day'

class daysList extends Component {
    componentDidMount() {
        this.props.getDays();
    }

    render() {
        return (
            <div>
                <h1>Days List</h1>
                {this.props.days.map(d => (
                    <Day day={d} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        days: state.days
    }
}

export default connect(mapStateToProps, { getDays })(daysList)