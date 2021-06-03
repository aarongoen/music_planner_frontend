const reduceDay = (state = {days: []}, action) => {
    switch(action.type) {
        case "FETCH_DAYS_SUCCESS":
            return action.payload
            // {...state, days: [...state.days, ...action.payload]}
        // case "ADD_PIECE":
        //     // debugger
        //     let days = state.map(day => {
        //         if (day.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return day
        //         }
        //     })
        // return {...state, days: days}
        case "SHOW_DAY_SUCCESS":
            return action.payload
        default:
            return state;
    }
};

export default reduceDay;