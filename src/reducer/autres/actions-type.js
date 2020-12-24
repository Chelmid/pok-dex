import { INIT, ADD_TEST } from './constant-actions';

//action et payload
export const test = () => { return { type: INIT }  } ;


export const add = (payload) => { return { type: ADD_TEST, payload }  } ;