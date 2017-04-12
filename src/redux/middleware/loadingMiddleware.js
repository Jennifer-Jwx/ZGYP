/**
 * Created by lyj on 2016/8/11.
 */
import {CHANGELOADINGTOTRUE, CHANGELOADINGTOFALSE} from '../modules/background';
export default function loadingMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise} = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      next({ type: CHANGELOADINGTOTRUE });
      const actionPromise = promise(client);
      actionPromise.then(
        () => next({ type: CHANGELOADINGTOFALSE }),
        () => next({ type: CHANGELOADINGTOFALSE })
      ).catch(()=> {
        dispatch(next({ type: CHANGELOADINGTOFALSE }));
      });

      return actionPromise;
    };
  };
}
