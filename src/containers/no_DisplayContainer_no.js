import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PieceForm from '../components/PieceForm';
import DaysPage from '../components/DaysPage';
import Summary from '../components/display/Summary';
import EventDisplay from '../components/display/EventDisplay';

class DisplayContainer extends Component {
    render() {
        return (
            <div>
                <h3>Hello from Container</h3>
                <Switch>
                    <Route path={`${this.props.url}/days/:dayId`} render={(routerProps) => 
                    <DayShow {...routerProps} name={this.props.name} date_pretty={this.props.date_pretty} />} />

                    {/* working */}
                    {/* <Route path={`${this.props.url}/calendar`} render={() => <Summary categories={this.props.categories} user={this.props.user} />} /> */}

                    {/* working */}
                    {/* <Route path={`${this.props.url}/photos/:eventId`} render={(routerProps) => <EventDisplay {...routerProps} categories={this.props.categories} events={this.props.events} token={this.props.token} user={this.props.user} />} /> */}


                    {/* <Route path={`${this.props.url}/map/:eventId`} render={(routerProps) => <EventDisplay {...routerProps} categories={this.props.categories} events={this.props.events} token={this.props.token} user={this.props.user} />} /> */}

                    {/* working */}
                    {/* <Route path={`${this.props.url}/map`} render={() => <Summary categories={this.props.categories} user={this.props.user} />} /> */}

                    {/* working */}
                    {/* <Route path={`${this.props.url}/newentry`} render={() => <Form categories={this.props.categories} history={this.props.history} token={this.props.token} user={this.props.user} />} /> */}

                    {/* <Route path={`${this.props.url}/:categoryId/:eventId`} render={(routerProps) => <EventDisplay {...routerProps} categories={this.props.categories} events={this.props.events} token={this.props.token} user={this.props.user} />} /> */}

                    {/* working */}
                    {/* <Route path={`${this.props.url}/:categoryId`} render={(routerProps) => <CategorySummary {...routerProps} categories={this.props.categories} events={this.props.events} token={this.props.token} user={this.props.user} />} /> */}

                    {/* working  */}
                    {/* <Route exact path={this.props.url} render={() => <Summary categories={this.props.categories} user={this.props.user} />} /> */}

                    {/* <Route render={() => <Summary categories={this.props.categories} user={this.props.user} />} /> */}
                </Switch>
            </div>
        )
    }
}

export default withRouter(DisplayContainer);