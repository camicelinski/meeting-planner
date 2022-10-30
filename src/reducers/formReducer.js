import FORM_ACTIONS from '../helpers/actions';
import { createInitStateObj } from '../helpers/helpersFunctions';

const formReducer = (state, action) => {
    const { type } = action;

    switch (type) {
        case FORM_ACTIONS.CHANGE_VALUE: {
            const {
                payload: { name, value },
            } = action;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                },
            };
        }

        case FORM_ACTIONS.SET_INVALID: {
            const {
                payload: { name },
            } = action;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    isValid: false,
                    isFill: true,
                },
            };
        }

        case FORM_ACTIONS.SET_VALID: {
            const {
                payload: { name },
            } = action;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    isValid: true,
                    isFill: true,
                },
            };
        }

        case FORM_ACTIONS.RESET_FORM:
            return createInitStateObj();

        default:
            return state;
    }
};

export default formReducer;
