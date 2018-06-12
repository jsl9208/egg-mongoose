'use strict';

module.exports = agent => {
  agent.beforeStart(function* () {
    if (agent.config.mongoose.agent) yield require('./lib/mongoose')(agent);
  });
};
