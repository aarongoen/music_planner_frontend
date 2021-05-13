export const getDays = () => {
    return dispatch => {
        fetch('http://localhost:3001/days')
        .then(res => res.json())
        .then((data) => dispatch({type: 'FETCH_DAYS_SUCCESS', payload: data})
            );
    };
};

