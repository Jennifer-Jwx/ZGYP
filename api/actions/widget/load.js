// import goeasySoap from 'soap';
const initialWidgets = [
  {id: 1, color: 'Red', sprocketCount: 7, owner: 'John'},
  {id: 2, color: 'Taupe', sprocketCount: 1, owner: 'George'},
  {id: 3, color: 'Green', sprocketCount: 8, owner: 'Ringo'},
  {id: 4, color: 'Blue', sprocketCount: 2, owner: 'Paul'}
];

export function getWidgets(req) {
  let widgets = req.session.widgets;
  if (!widgets) {
    widgets = initialWidgets;
    req.session.widgets = widgets;
  }
  return widgets;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    resolve(getWidgets(req));
    // write to database
    // const params = {user: 'lyj', password: '8888', identity: 'normal'};
    // goeasySoap.createClient('http://localhost:6436/Service1.svc?wsdl', function (err, client) {
    // goeasySoap.createClient('http://10.10.0.23:3033/GoEasyServer?wsdl', function (err, client) {
    //  if (err) {
    //    console.log('找不到服务');
    //    resolve(getWidgets(req));
    //  }
    //  else {
    //    if (client) {
    //      //console.log(client);
    //      client.Login(params,function(error,result){
    //        console.log("result");
    //        console.log(result);
    //      });
    //    }
    //    resolve(getWidgets(req));
    //  }
    // });
  });
}
