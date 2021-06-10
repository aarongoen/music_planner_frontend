const reduceDay = (state = {days: []}, action) => {
    switch(action.type) {
        case "FETCH_DAYS_SUCCESS":
            return action.payload
      
        case "SHOW_DAY_SUCCESS":
            return action.payload            
        case "ADD_PIECE": {
            let oldDay = state.find(day => day.id === action.payload.day.day_id)
            let filteredDays = state.filter(day => day !== oldDay)
            let newPieceArray = oldDay.pieces.concat(action.payload)
            oldDay.pieces = newPieceArray
            return {...state, days: [...filteredDays, oldDay.pieces]}
        }
        // case "DELETE_PIECE": {
        //     let daysLeft = state.days.map(movie => {
        //         if (day.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return day
        //         }
        //     })
        //     return {...state, days: daysLeft}
        // }
        default:
            return state;
    }
}
   

export default reduceDay;
