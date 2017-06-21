import { NEW_VALUE } from '../actions/header.actions';

const reducer = (state, action) => {
    switch (action.type) {
        case NEW_VALUE:
            return {
                ...state,
                value: action.value
            };

        default:
            return state;
    }
};

export default reducer;