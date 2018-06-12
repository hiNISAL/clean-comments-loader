const { getOptions } = require('loader-utils');
const { removeComments } = require('../utils/utils');

module.exports = function(source) {

  const { onlyBlock, onlyLine } = getOptions(this) || {};

  if (onlyBlock) {
    return removeComments(source, 'onlyBlock');
  }

  if (onlyLine) {
    return removeComments(source, 'onlyLine');
  }

  return removeComments(source, 'all');
}
