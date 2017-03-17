import {GO_HOME} from './types';
import axios from 'axios';

export const goHome = () => {
    Actions.home()

    return(dispatch) => {
        dispatch({
            type: GO_HOME,
            payload: null
        })
    }
}
