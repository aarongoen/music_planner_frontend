export const getDays = () => {
    return dispatch => {
        fetch('http://localhost:3000/days')
        .then(res => res.json())
        .then((data) => dispatch({type: 'FETCH_DAYS_SUCCESS', payload: data})
            );
    };
};

export const showDay = () => {
    return dispatch => {
        fetch('http://localhost:3000/days/:id')
        .then(res => res.json())
        .then((data) => dispatch({type: 'FETCH_DAY_SUCCESS', payload: data})
            );
    };
};



