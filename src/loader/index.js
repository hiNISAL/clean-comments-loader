const { getOptions } = require('loader-utils');
const { removeComments } = require('../utils/utils');

module.exports = function(source) {
  const options = getOptions(this);

  if (options.onlyBlock) {
    return removeComments(source, 'onlyBlock');
  }

  if (options.onlyLine) {
    return removeComments(source, 'onlyLine');
  }

  return removeComments(source, 'all');
}
