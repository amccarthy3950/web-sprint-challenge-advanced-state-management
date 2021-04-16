import axios from 'axios';

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';


export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch ({type:FETCH_START})

        axios.get('http://localhost:3333/smurfs') //getting data from server
        .then(res => {
            // console.log(res.data);
            dispatch({type:FETCH_SUCCESS, payload:res.data})
        })
        .catch(err => {
            // console.log({err});
            dispatch({type:FETCH_FAILURE, payload:err.message})
        })
    }
}

export const addSmurf = objectState => {  // as i said before, instead of passing everything separately, i passed an object with all parameters nested
    
    // console.log(objectState) //check if everything loaded properly 
    const newSmurf ={
        id:new Date().toString(), // added unique id to new smurf
        name: objectState.name,
        position: objectState.position,
        nickname: objectState.nickname,
        description: objectState.description
    }
    return{
        type:ADD_SMURF, payload:newSmurf
    }
}

export const setErrorMessage = errorMessage => {
    return {
        type:SET_ERROR_MESSAGE, payload:errorMessage
    }
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.