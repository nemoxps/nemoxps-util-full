/* eslint-disable global-require */
let api = require('../');


let nodeApi = Object.assign({}, api, {
    fsp: require('fsp'),
    
    doesPathBreakOut: require('./doesPathBreakOut'),
    exists: require('./exists'),
});


module.exports = api.Object.toMapObj(nodeApi, true);