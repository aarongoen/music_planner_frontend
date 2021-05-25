import React from 'react'
import { route } from 'react-router-dom';

 function Welcome() {
    return (
        <div>
            <h1>Welcome to Music Planner</h1>
            <h5>a tool to help you discover and plan choral music for worship according to the Revised Common Lectionary</h5>
            {/* <Route path="/days" render={() => <p>Click here to begin</p>} /> */}
        </div>
    )
}

export default Welcome;
