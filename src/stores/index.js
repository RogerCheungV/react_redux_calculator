import { createStore } from 'redux';
import reducer from '../reducers';

const createStoreFn = initState => {
    return createStore(reducer, initState);
};

export default createStoreFn;