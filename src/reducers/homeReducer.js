import { GO_HOME } from '../actions/types';

export default function reportEmail (state = 'abc', action) {
    switch (action.type) {
        case GO_HOME:
            return action.payload;
        default:
            return state
    }
}
