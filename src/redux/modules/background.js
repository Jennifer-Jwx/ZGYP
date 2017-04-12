/**
 * Created by lyj on 2016/4/18.
 */
const CHANGETOBLACK = 'redux-example/CHANGETOBLACK';
const CHANGETOWHITE = 'redux-example/CHANGETOWHITE';

export const CHANGELOADINGTOTRUE = 'redux-example/CHANGELOADINGTOTRUE';
export const CHANGELOADINGTOFALSE = 'redux-example/CHANGELOADINGTOFALSE';

export const REQUIRELOGIN = 'redux-example/REQUIRELOGIN';
export const NOTREQUIRELOGIN = 'redux-example/NOTREQUIRELOGIN';


const initialState = {
  isBackGroundColorBlack: false,
  isLoading: false,
  toLogin: false
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGETOBLACK:
      return {
        ...state,
        isBackGroundColorBlack: true
      };
    case CHANGETOWHITE:
      return {
        ...state,
        isBackGroundColorBlack: false
      };
    case CHANGELOADINGTOTRUE:
      return {
        ...state,
        isLoading: true
      };
    case CHANGELOADINGTOFALSE:
      return {
        ...state,
        isLoading: false
      };
    case REQUIRELOGIN:
      return {
        ...state,
        toLogin: true
      };
    case NOTREQUIRELOGIN:
      return {
        ...state,
        toLogin: false
      };
    default:
      return state;
  }
}

export function changeToBlack() {
  return {
    type: CHANGETOBLACK
  };
}
export function changeToWhite() {
  return {
    type: CHANGETOWHITE
  };
}

export function changeLoadingToTrue() {
  return {
    type: CHANGELOADINGTOTRUE
  };
}

export function changeLoadingToFalse() {
  return {
    type: CHANGELOADINGTOFALSE
  };
}

export function changeToLoginFalse() {
  return {
    type: NOTREQUIRELOGIN
  };
}
