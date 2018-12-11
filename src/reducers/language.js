import { SWITCH_LANGUAGE } from '../actions/types';
const INIT_STATE = {
  language: navigator.language
};
export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}
