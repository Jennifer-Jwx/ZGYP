/**
 * Created by lyj on 2016/4/23.
 */
import mongoose from 'mongoose';
import config from './mongoConfig';

// Initialize Mongoose
module.exports.connect = function (cb) {
  let db = mongoose.connect(config.uri, config.options, function (err) {
    // Log Error
    if (err) {
      console.error('Could not connect to MongoDB!');
      console.log(err);
    } else {
      console.log("MongoDB连接成功");

      // Enabling mongoose debug mode if required
      mongoose.set('debug', config.debug);

      // Call callback FN
      if (cb) cb(db);
    }
  });
};
