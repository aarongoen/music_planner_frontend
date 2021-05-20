// import React, { Component } from 'react';
import React from 'react';
import { Route } from  'react-router-dom';
import { connect } from 'react-redux';
import { getDays } from '../redux/actions/dayActions.js';
import DaysList from './DaysList';
import DayShow from './DayShow';

// class DaysPage extends Component {
//     componentDidMount() {
//         this.props.getDays();
//     }
 
//     render({ days }) {
//         let { match } = this.props;
//         return (
//             <div>
//                Hello from daysPage
//                <DaysList />
//                <Route path={`${match.url}/:dayId`} render={routerProps => <DayShow {...routerProps} days={days} />} />
//             </div>  
//         )
//     }
// }

const mapStateToProps = state => {
    return {
        days: state.days
    }
}

// export default connect(mapStateToProps, { getDays })(DaysPage);

const DaysPage = ({ match, days }) => (
    <div>
        Hello from DaysPage
        <DaysList days={days} />
        <Route exact path={match.url} render={() =>
        <h3>Click on a day to view details.</h3>}/>
        <Route path={`${match.url}/:dayId`} 
        render={routerProps => <DayShow {...routerProps} days={days} />}/>
    </div>
)

// export default DaysPage;

export default connect(mapStateToProps, { getDays })(DaysPage);
