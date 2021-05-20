const reduceDay = (state = [], action) => {
    switch(action.type) {
        case "FETCH_DAYS_SUCCESS":
        // state.days = action.payload 
            return action.payload
        case "SHOW_DAY_SUCCESS":
            return action.payload
        default:
            return state;
    }
};

export default reduceDay;