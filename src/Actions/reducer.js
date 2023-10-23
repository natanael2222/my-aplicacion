import { TYPES } from "@/Actions/actions";
import { initialState } from "../reducer/initialState";


export const reducer = (state,action) => {
    switch (action.type){
        case TYPES.INCREMENTAR:
            return {
                ...state,
                contador: state.contador + 1,
            };
            case TYPES.RESTEAR:
                return initialState

                case TYPES.DECREMENTAR:
                return {
                    ...state,
                contador: state.contador -1,
                };
                default:
                    return state
    }
};