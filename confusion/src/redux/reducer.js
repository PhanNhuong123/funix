import { COMMENTS } from "../share/comments";
import { DISHES } from "../share/dishes";
import { LEADERS } from "../share/leader";
import { PROMOTIONS } from "../share/promotion";


export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS

}


export const Reducer = (state = initialState , action) => {
    return state
};


// export default Reducer