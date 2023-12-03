import {useReducer}from "react";
import { TYPES } from "../Actions/actions";
import { reducer } from "../Actions/reducer";
import { initialState } from "../Actions/initialState";

const contador =() => {
    const [state,dispatch] = useReducer (reducer,initialState);

    const sumar = () => dispatch({type: TYPES.INCREMENTAR });

    const resetear = () => dispatch({type: TYPES.RESTEAR });

    const restar  = () => dispatch({type: TYPES.DECREMENTAR });
}