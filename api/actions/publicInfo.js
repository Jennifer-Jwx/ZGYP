/**
 * Created by Administrator on 2016/6/29.
 */
import goeasyWcfRequest from '../general/goeasyWcfRequest.js';
import generateParams from '../general/generateParams';

function getAllAddress(userId, path, level, addressInfo, data, req, resolve, reject, resultObject) {
  let value = '';
  let nextLevel = level;
  if (path.length - 1 > level && level < 2) {
    nextLevel = level + 1;
    value = path[level];
    const params = {
      jcsonparams: JSON.stringify(
        {
          login: [{
            type: 'AddressTestByUserID',
            params: {
              userid: userId,
              eomid: global.goeasySystem,
              data: {
                value: value,
                defaultvalue: '',
                firstfilter: data.firstfilter,
                datafilter: data.datafilter
              }
            }
          }]
        })
    };
    goeasyWcfRequest(params, reject, req, function (result) {
      try {
        const responseResult = result.login.AddressTestByUserID;
        if (responseResult.IsValid) {
          if (data.defValue && data.defValue !== '') {
            try {
              const addressResult = JSON.parse(responseResult.Message);
              let newInfo = {...addressInfo};
              let key = '';
              switch (nextLevel) {
                case 1:
                  key = 'two';
                  break;
                case 2:
                  key = 'three';
                  break;
                case 3:
                  key = 'four';
                  break;
              }
              newInfo[key] = addressResult[0]['0'];
              getAllAddress(userId, path, nextLevel, newInfo, data, req, resolve, reject, resultObject);
            } catch (ex) {
              reject(ex.Message);
            }
          } else {
            resolve(JSON.parse(responseResult.Message));
          }
        } else {
          reject(responseResult.Message);
        }
      } catch (ex) {
        reject(ex.message);
      }
    });
  } else {
    resolve({...resultObject, addressData: {...addressInfo, defValue: path}});
  }
}

export function getAddressInfo(userId, data, req, resolve, reject, resultObject) {
  const params = {
    jcsonparams: JSON.stringify(
      {
        login: [{
          type: 'AddressTestByUserID',
          params: {
            userid: userId,
            eomid: global.goeasySystem,
            data: {
              value: data.value,
              defaultvalue: data.defValue,
              firstfilter: data.firstfilter,
              datafilter: data.datafilter
            }
          }
        }]
      })
  };
  goeasyWcfRequest(params, reject, req, function (result) {
      try {
        const responseResult = result.login.AddressTestByUserID;
        if (responseResult.IsValid) {
          const addressResult = JSON.parse(responseResult.Message);
          const addressInfo = addressResult[0]['0'];
          const pathInfoArray = addressResult[1]['1'][0]['路径'].split(',');
          if (data.defValue && data.defValue !== '') {
            getAllAddress(userId, pathInfoArray, 0, {'one': addressInfo}, data, req, resolve, reject, resultObject);
          } else {
            resolve({...resultObject, addressData: {'one': addressResult[0]['0'], defValue: pathInfoArray}});
          }
        }
        else {
          reject(responseResult.Message);
        }
      }
      catch
        (ex) {
        resolve(ex.message);
      }
    }
  );
}

export default function publicInfo(req) {
  return new Promise((resolve, reject) => {
    try {
      const type = req.body.type;
      const user = req.session.user;
      const publicUser = req.session.publicUser;

      if (publicUser) {
        getAddressInfo(publicUser.userId, req.body.data, req, resolve, reject);
      } else if (user) {
        if (type === 'getAddressInfo') {
          getAddressInfo(user.userId, req.body.data, req, resolve, reject);
        }
      } else {
        goeasyWcfRequest(generateParams([{
          webpageid: 'login',
          request: [{
            type: 'Login',
            user: global.admin,
            password: global.adminPassword,
            identity: JSON.stringify({identity: 'normal', domain: 'cloud.goeasy.net'})
          }]
        }]), reject, function (result) {
          const loginResult = result.login && result.login.Login;
          if (loginResult && loginResult.IsValid) {
            const userInfo = loginResult.Message;
            if (userInfo) {
              const userInfoArray = userInfo.split('.');
              if (userInfoArray.length > 0) {
                req.session.publicUser = {
                  userId: userInfoArray[0]
                };
                getAddressInfo(userInfoArray[0], req.body.data, req, resolve, reject);
              }
            } else {
              reject('请重新获取地址信息');
            }
          }
          else {
            reject(loginResult.Message);
          }
        });
      }
    } catch (ex) {
      console.log(75);
      reject(ex);
    }
  });
}
