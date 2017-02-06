'use strict'

/* -----------------------------------------------------------------------------
 * filter
 * -------------------------------------------------------------------------- */

module.exports = function (_err, frames) {
  return frames.filter((frame) => !frame.toString().includes('bluebird/js'))
}
