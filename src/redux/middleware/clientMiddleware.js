// 临时这样做
import {CHANGELOADINGTOTRUE, CHANGELOADINGTOFALSE, REQUIRELOGIN, NOTREQUIRELOGIN} from '../modules/background';
export default function clientMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({ ...rest, type: REQUEST });
      // 临时这样做
      next({ type: CHANGELOADINGTOTRUE });

      const actionPromise = promise(client);
      actionPromise.then(
        (result) => {
          // 临时这样做
          next({ type: CHANGELOADINGTOFALSE });
          if (result) {
            if (result.isValid === false && result.needLogin) {
              next({ type: REQUIRELOGIN });
            } else {
              next({ type: NOTREQUIRELOGIN });
            }
          }
          return next({ ...rest, result, type: SUCCESS });
        },
        (error) => {
          // 临时这样做
          next({ type: CHANGELOADINGTOFALSE });
          if (error === '用户尚未登录') {
            next({ type: REQUIRELOGIN });
          } else {
            next({ type: NOTREQUIRELOGIN });
          }
          return next({ ...rest, error, type: FAILURE });
        }
      ).catch((error)=> {
        console.error('MIDDLEWARE ERROR:', error);
        next({ ...rest, error, type: FAILURE });
        // 临时这样做
        next({ type: CHANGELOADINGTOFALSE });
      });

      return actionPromise;
    };
  };
}
