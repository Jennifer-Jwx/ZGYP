/**
 * Created by lyj on 2016/5/19.
 */
const LOAD = 'redux-example/productListPage/LOAD';
const LOAD_SUCCESS = 'redux-example/productListPage/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/productListPage/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: {
          ...state.data,
          ...action.result
        }
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.home.loaded;
}

export function load(filter, order, page) {
  return {
    types: [ LOAD, LOAD_SUCCESS, LOAD_FAIL ],
    promise: (client) => client.post('/home', {
      data: {
        type: 'getData',
        filter,
        order,
        page
      }
    })
  };
}

