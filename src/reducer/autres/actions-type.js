import { TEST, ADD_TEST } from './constant-actions';

//action et payload
export const test = () => { return { type: TEST }  } ;


export const add = (payload) => { return { type: ADD_TEST, payload }  } ;