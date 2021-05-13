export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_DAYS_SUCCESS":
        // state.days = action.payload 
            return action.payload
        default:
            return state;
    }
};