import {connect} from './seedDB';
import initApiServer from './initApiServer';

//initApiServer();

connect(function (db) {
  console.log('Many Times?');
  initApiServer(db);
});
