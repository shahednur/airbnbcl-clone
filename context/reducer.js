import { DATA_ACTION_TYPES } from "./actionTypes";
import { initialState } from "./store";

const dataReducer = (state, action) => {
    const { type, payload} = action;
    const { adults, children, infants } = state.guests;

    switch(type){
        case DATA_ACTION_TYPES.SET_LOCATION:
            return { ...state, location: payload };
    }
}

export default dataReducer;