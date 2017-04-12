/**
 * Created by lyj on 2016/5/19.
 */
import goeasyWcfRequest from '../general/goeasyWcfRequest';
import generateParams from '../general/generateParams';
import analysisResultOfWcf from '../general/analysisResultOfWcf';

function getData(userId, req, resolve, reject) {
  let requestArray = [ {
    webpageid: 'productShowList',
    userId: userId,
    request: [ {
      type: 'GetCommandDatas',
      pageSize: 6,
      returnName: 'products',
      page: req.body.page ? req.body.page : '0',
      filter: req.body.filter
    } ]
  } ];
  const params = generateParams(requestArray);
  goeasyWcfRequest(params, reject, req, function (result) {
    try {
      // resolve(analysisResultOfWcf(requestArray, result, req));
      const resultJson = analysisResultOfWcf(requestArray, result, req);
      if (resultJson.isValid == false && resultJson.productsError === '用户尚未登录') {
        // 公共用户被踢掉时的处理
        goeasyWcfRequest(generateParams([ {
          webpageid: 'login',
          request: [ {
            type: 'Login',
            user: global.admin,
            password: global.adminPassword,
            identity: JSON.stringify({ identity: 'normal', domain: 'cloud.goeasy.net' })
          } ]
        } ]), reject, req, function (result) {
          const loginResult = result.login && result.login.Login;
          if (loginResult && loginResult.IsValid) {
            const userInfo = loginResult.Message;
            if (userInfo) {
              const userInfoArray = userInfo.split('.');
              if (userInfoArray.length > 0) {
                req.session.publicUser = {
                  userId: userInfoArray[ 0 ]
                };
                getData(userInfoArray[ 0 ], req, resolve, reject);
              }
            } else {
              reject('产品列表查询未成功');
            }
          }
          else {
            reject(loginResult.Message)
          }
        });
      } else {
        resolve(resultJson);
      }
    } catch (ex) {
      reject(ex.message);
    }
  });
}


function analysisAction(userId, req, resolve, reject) {
  if (req.body.type === 'getData') {
    getData(userId, req, resolve, reject);
  }
}

export default function productListPage(req) {
  return new Promise((resolve, reject) => {
    const publicUser = req.session.publicUser;
    if (publicUser) {
      analysisAction(publicUser.userId, req, resolve, reject);
    } else {
      goeasyWcfRequest(generateParams([ {
        webpageid: 'login',
        request: [ {
          type: 'Login',
          user: global.admin,
          password: global.adminPassword,
          identity: JSON.stringify({ identity: 'normal', domain: 'cloud.goeasy.net' })
        } ]
      } ]), reject, req, function (result) {
        const loginResult = result.login && result.login.Login;
        if (loginResult && loginResult.IsValid) {
          const userInfo = loginResult.Message;
          if (userInfo) {
            const userInfoArray = userInfo.split('.');
            if (userInfoArray.length > 0) {
              req.session.publicUser = {
                userId: userInfoArray[ 0 ]
              };
              analysisAction(userInfoArray[ 0 ], req, resolve, reject);
            }
          } else {
            reject('产品列表查询未成功');
          }
        }
        else {
          reject(loginResult.Message)
        }
      });
    }
  });
}