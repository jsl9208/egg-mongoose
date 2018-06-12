'use strict';

module.exports = app => {
  app.beforeStart(function* () {
    if (app.config.mongoose.app) yield require('./lib/mongoose')(app);
  });
};
