import goeasyWcfRequest from '../general/goeasyWcfRequest.js';
import generateParams from '../general/generateParams';

function server(req) {
  return new Promise((resolve, reject) => {
    const loginInfo = req.body.loginInfo;
    try {
      const requestArray = [ {
        webpageid: 'login',
        request: [ {
          type: 'Login',
          user: loginInfo.name,
          password: loginInfo.password,
          identity: JSON.stringify({ identity: 'normal', domain: 'cloud.goeasy.net' })
        } ]
      } ];
      const params = generateParams(requestArray);
      goeasyWcfRequest(params, reject, req, function (result) {
        const loginResult = result.login && result.login.Login;
        if (loginResult && loginResult.IsValid) {
          const userInfo = loginResult.Message;
          if (userInfo) {
            const userInfoArray = userInfo.split('.');
            const user = {
              userId: userInfoArray[ 0 ],
              userLoginName: userInfoArray[ 1 ]
            };
            req.session.user = user;
            resolve({ isValid: true, user });
          } else {
            resolve({ isValid: false, message: '没有用户信息' });
          }
        }
        else {
          resolve({ isValid: false, message: loginResult.Message });
        }
      });
    } catch (ex) {
      reject(ex);
    }
  });
}

export default function login(req) {
  return server(req);
}



