/**
 * Created by Administrator on 2016/6/6.
 */
import goeasySoap from 'soap';
import { clear } from './../actions/clearSession';

export default function goeasyWcfRequest(params, reject, req, callback) {
  console.log(params);
  try {
    const beginDate = new Date().getTime();
    // console.log(beginDate);
    goeasySoap.createClient(global.wcfUrl, function (err, client) {
      if (err) {
        console.log(err);
        reject(err);
      } else if (client && client.MallServer) {
        client.MallServer(params, function (error, result) {
          try {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              const responseResult = JSON.parse(result.MallServerResult);
              if (responseResult.IsValid === false) {
                reject(responseResult.Message);
              } else {
                console.info(responseResult);
                const endDate = new Date().getTime();
                // console.log(endDate);
                console.log((endDate - beginDate));
                callback(responseResult);
              }
            }
          } catch (exception) {
            console.log(result);
            clear(req);
            reject(exception);
          }
        }, { timeout: 300000 });
      }
    });
  } catch (ex) {
    reject(ex);
  }
}
