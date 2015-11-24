var _ = require('lodash')
var allclose = require('allclose')

module.exports = function close (t) {
  return function (a, b, atol, rtol) {
    var msg = 'should all be close'
    if (_.isNumber(atol)) msg += ' (up to ' + atol + ')'
    var result = allclose(a, b, atol, rtol)
    if (result) return t.ok(true, msg)
    return t.equal(a, b, msg)
  }
}
