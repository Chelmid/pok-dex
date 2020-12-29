import { INIT, ADD_TEST } from './constant-actions';

//action et payload
export const test = () => { return { type: INIT }  } ;


export const init = (payload) => { return { type: INIT, payload }  } ;