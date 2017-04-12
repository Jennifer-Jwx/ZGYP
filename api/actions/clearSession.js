/**
 * Created by Administrator on 2016/7/1.
 */
export default function clearSession(req) {
  return new Promise((resolve, reject) => {
    try {
      if (req.body.type === 'clearSession') {
        clear(req);
        resolve({isValid: true});
      }
    } catch (ex) {
      reject(ex);
    }
  });
}

export function clear(req) {
  if (req && req.session) {
    req.session.user = null;
    req.session.publicUser = null;
  }
}
