const delegates = require('delegates')

var proto = module.exports = {
    
}
delegates(proto,'response').access('body')
delegates(proto,'request').access('method').access('url')