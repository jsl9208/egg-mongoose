'use strict';

module.exports = app => {
  app.beforeStart(() => {
    app.mymongoose = app.mongooseDB.createInstance(app.config.mymongoose);
    app.mongoose.loadModel();
  });
};
