import {useReducer}from "react";
import { TYPES } from "@actions/actions";
import { reducer } from "@reducer/reducer";
import { initialState } from "../reducer/initialState";

const contador =() => {
    const [state,dispatch] = useReducer (reducer,initialState);

    const sumar = () => dispatch({type: TYPES.INCREMENTAR });

    const resetear = () => dispatch({type: TYPES.RESTEAR });

    const restar  = () => dispatch({type: TYPES.DECREMENTAR });
}