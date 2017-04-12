/**
 * Created by Administrator on 2016/7/1.
 */
const CLEARESSION = 'redux-example/clearSession/CLEARESSION';
const CLEARESSION_SUCCESS = 'redux-example/clearSession/CLEARESSION_SUCCESS';
const CLEARESSION_FAIL = 'redux-example/clearSession/CLEARESSION_FAIL';

const initialState = {
  cleared: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CLEARESSION:
      return {
        ...state,
        clearing: true
      };
    case CLEARESSION_SUCCESS:
      return {
        ...state,
        clearing: false,
        loaded: true
      };
    case CLEARESSION_FAIL:
      return {
        ...state,
        clearing: false,
        cleared: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function clear() {
  return {
    types: [CLEARESSION, CLEARESSION_SUCCESS, CLEARESSION_FAIL],
    promise: (client) => client.post('/clearSession', {
      data: {
        type: 'clearSession'
      }
    })
  };
}
