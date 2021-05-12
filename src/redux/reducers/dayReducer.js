export default (state = {}, action) => {
    switch(action.type) {
        case "FETCH_DAYS_SUCCESS":
        state.days = action.payload 
            return state
        default:
            return state;
    }
};