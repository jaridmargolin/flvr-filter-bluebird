/* eslint-env mocha */
'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
const assert = require('chai').assert
const Promise = require('bluebird')

// lib
const filter = require('../lib/index.js')

/* -----------------------------------------------------------------------------
 * test
 * -------------------------------------------------------------------------- */

describe('flvr-filter-bluebird', function () {
  it('Should remove chai frames from stack trace.', function () {
    const orig = Error.prepareStackTrace
    Error.prepareStackTrace = function (_, stack) { return stack }

    return new Promise((resolve, reject) => { throw new Error('test') }).catch(e => {
      filter(null, e.stack).map(callsite => callsite.toString())
        .forEach(str => assert.isFalse(str.includes('bluebird/js')))

      Error.prepareStackTrace = orig
    })
  })
})
