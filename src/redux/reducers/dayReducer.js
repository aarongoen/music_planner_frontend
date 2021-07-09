const reduceDay = (state = {days: [], loading: true}, action) => {
    switch(action.type) {
        case "FETCH_DAYS_SUCCESS":
            return {...state, days: action.payload, loading:false}
        case "SHOW_DAY_SUCCESS":
            console.log(action.payload)
            return action.payload
        case "ADD_PIECE": {
            // debugger
            let oldDay = state.days.find(day => day.id === action.payload.day.day_id)
            // debugger
            let filteredDays = state.days.filter(day => day !== oldDay)
            let newPieceArray = oldDay.pieces.concat(action.payload)
            // oldDay.pieces = newPieceArray
            const newDay = {...oldDay, pieces: newPieceArray}
            // debugger
            // return {...state, days: [...filteredDays]}
            return {...state, days: filteredDays.concat(newDay)}
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
