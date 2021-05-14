import axios from 'axios';

export const addSmurf = (newSmurf) => {
    return {type: "ADD_SMURF", payload: newSmurf }
}

export const setError = (err) => {
    return {type: "ERROR_MESSAGE", payload: err}
}

export const fetchSmurfs = () => {
    return (dispatch => {
        
        dispatch({type: "START_OF_SMURF_FETCH"});

        axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data)
            dispatch({type: "SUCCESSFUL_API_FETCH", payload: res.data})
        }) 
        .catch(err => {
            dispatch({type: "FAILED_API_FETCH", payload: err})
        })
    })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
