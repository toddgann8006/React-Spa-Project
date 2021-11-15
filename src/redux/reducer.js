import { MASSAGE } from "../shared/massage";
import { FACIALS } from "../shared/facials";

export const initialState = {
    massage: MASSAGE,
    facials: FACIALS
};

export const Reducer = (state = initialState, action) => {
    return state;
};

