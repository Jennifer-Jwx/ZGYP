/**
 * Created by lyj on 2016/8/23.
 */

/*
 问题：返回值客户端的key根据服务端返回数据自动生成，不便于前端代码的理解，计划在参数组织时加入返回别名，
 每个webpagid的request的每个item都可设置别名，分析服务端数据时，根据每个item的内容，若包含别名则用别名作为key，
 不包含别名则根据规则自动生成key
 同时可以避免client更改代码
 */

export default function analysisResultOfWcf(params, result, req) {
  const clientResult = {};
  if (params instanceof Array) {
    params.forEach((item, index)=> {
      if (item.request instanceof Array) {
        item.request.forEach((action)=> {
          const actionResult = result[item.webpageid] && result[item.webpageid][action.type];
          if (actionResult) {
            if (actionResult.IsValid) {
              if (index === 0) {
                clientResult.orderNumber = actionResult.orderNumber;
                clientResult.activeId = actionResult.activeID;
              }
              // 这里的key是自动生成的，计划在params中加入returnName,作为key
              // 以下为更改
              if (action.returnName && action.returnName !== '') {
                clientResult[action.returnName] = JSON.parse(actionResult.Message);
                if (action.type === 'GetCommandDatas') {
                  clientResult[action.returnName + 'RecordCount'] = actionResult.RecordCount;
                  clientResult[action.returnName + 'Pagesize'] = action.pageSize || 20;
                }
                clientResult[action.returnName + 'Error'] = null;
              } else {
                clientResult[item.webpageid + action.type] = JSON.parse(actionResult.Message);
                if (item.type === 'GetCommandDatas') {
                  clientResult[item.webpageid + action.type + 'RecordCount'] = actionResult.RecordCount;
                  clientResult[item.webpageid + action.type + 'Pagesize'] = action.pageSize || 20;
                }
                clientResult[item.webpageid + action.type + 'Error'] = null;
              }
            } else {
              clientResult.isValid = false;
              if (actionResult.Message === "用户尚未登录") {
                clientResult.needLogin = true;
                req.session.user = null;
                req.session.publicUser = null;
              }
              // 这里的key是自动生成的，计划在params中加入returnName,作为key
              // 以下为更改
              if (action.returnName && action.returnName !== '') {
                clientResult[action.returnName + 'Error'] = actionResult.Message;
              } else {
                clientResult[item.webpageid + action.type + 'Error'] = actionResult.Message;
              }
            }
          } else {
            clientResult.isValid = false;
            clientResult.message = '返回内容为空';
            console.log(item.webpageid);
            console.log(action.type);
            console.log(result);
          }
        });
      }
    });
    // console.info(clientResult);
    return clientResult;
  }
}
