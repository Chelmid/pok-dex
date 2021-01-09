import { INIT, SET_POKEMON_ID, STATUS_ONE_POKEMON } from './constant-actions';

//action et payload
export const setPokemon = (payload) => { return { type: SET_POKEMON_ID, payload }  } ;

export const init = (payload) => { return { type: INIT, payload }  } ;

export const setStatusOnePokemon = (payload) => { return { type: STATUS_ONE_POKEMON, payload }  } ;