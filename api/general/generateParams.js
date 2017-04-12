/**
 * Created by lyj on 2016/8/23.
 */

// const eomId = global.goeasySystem;// 00047 00029

function analysisGetCommandDatasParams(item, action) {
  return {
    "type": "GetCommandDatas",
    "params": {
      "userid": item.userId,
      "eomid": global.goeasySystem,
      "webpageid": item.webpageid,
      "pagesize": action.pageSize ? action.pageSize.toString() : "20",
      "pageid": action.page ? action.page.toString() : "0",
      "isbill": action.isbill || '0',
      "property": action.property || "",
      "direction": action.direction || "",
      "filter": action.filter || '',
      "orderNumber": action.orderNumber || '',
      withDefaultData: action.withDefaultData === '1' ? '1' : '',
      "activeID": action.activeId || ''
    }
  };
}

function analysisLoginParams(action) {
  return {
    type: 'Login',
    params: {
      user: action.user,
      password: action.password,
      identity: JSON.stringify({identity: 'normal', domain: 'cloud.goeasy.net'})
    }
  };
}

function analysisOnClickButtonOfBillParams(item, action) {
  return {
    "type": "OnClickButtonOfBill",
    "params": {
      "button": action.button || "verify",
      "userid": item.userId,
      "eomid": global.goeasySystem,
      "webpageid": item.webpageid,
      "items": action.items || '',
      "orderNumber": action.orderNumber || '',
      "activeID": action.activeId || ''
    }
  };
}

function analysisCheckVerifycodeParams(item, action) {
  return {
    "type": "CheckVerifycode",
    "params": {
      "userid": item.userId,
      "eomid": global.goeasySystem,
      phonenumber: action.phonenumber,
      verifycode: action.verifycode
    }
  };
}

function analysisSaveActiveDatasParams(item, action) {
  return {
    "type": "SaveActiveDatas",
    "params": {
      "userid": item.userId,
      "eomid": global.goeasySystem,
      "webpageid": item.webpageid,
      "items": action.items || '',
      flag: action.flag || 'modify',
    }
  };
}

function analysisGetActiveFieldFormulaParams(item, action) {
  return {
    "type": "GetActiveFieldFormula",
    "params": {
      "userid": item.userId,
      "eomid": global.goeasySystem,
      "webpageid": item.webpageid,
      "changeField": action.changeField,
      "items": action.items,
      "orderNumber": action.orderNumber
    }
  };
}

function analysisReSetPasswordParams(item, action) {
  return {
    "type": "ReSetPassword",
    "params": {
      "userid": item.userId,
      "eomid": global.goeasySystem,
      "oldword": action.oldword,
      "newword": action.newword,
      "confirmword": action.confirmword
    }
  };
}

function analysisFindPasswordParams(item, action) {
  return {
    "type": "FindPassword",
    "params": {
      "userid": item.userId,
      "eomid": global.goeasySystem,
      "newword": action.newword,
      "confirmword": action.confirmword
    }
  };
}

export default function generateParams(params) {
  const requestParams = {};
  if (params instanceof Array) {
    params.forEach((item)=> {
      const actions = [];
      if (item.request instanceof Array) {
        item.request.forEach((action)=> {
          if (action.type === 'GetCommandDatas') {
            //analysisGetCommandDatasParams(item, action);
            actions.push(analysisGetCommandDatasParams(item, action));
          } else if (action.type === 'Login') {
            actions.push(analysisLoginParams(action));
          } else if (action.type === 'OnClickButtonOfBill') {
            actions.push(analysisOnClickButtonOfBillParams(item, action));
          } else if (action.type === 'CheckVerifycode') {
            actions.push(analysisCheckVerifycodeParams(item, action));
          } else if (action.type === 'SaveActiveDatas') {
            actions.push(analysisSaveActiveDatasParams(item, action));
          } else if (action.type === 'GetActiveFieldFormula') {
            actions.push(analysisGetActiveFieldFormulaParams(item, action));
          } else if (action.type === 'ReSetPassword') {
            actions.push(analysisReSetPasswordParams(item, action));
          } else if (action.type === 'FindPassword') {
            actions.push(analysisFindPasswordParams(item, action));
          }
        });
      }
      requestParams[item.webpageid] = actions;
    });
    return {
      jcsonparams: JSON.stringify(requestParams)
    };
  }
}
