import React from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';

 const SmurfList = (props)=> {



    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    if (props.error !=='') {
        return <h1>Error: {props.error}</h1>;  // error message will appear in case when axios.get fails
    }

    return(<div className="listContainer">
        {props.smurfs.map(item =>{
            return (
        <Smurf key={item.id} smurf={item}/>)})}
    </div>);
}

const mapStateToProps = (state) =>{
    return {
        isLoading: state.isLoading,
        smurfs:state.smurfs,
        error:state.error
    }
}

export default connect(mapStateToProps,{})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.