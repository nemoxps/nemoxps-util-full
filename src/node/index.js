let api = require('../');


let nodeApi = Object.assign({}, api, {
    fsp: Object.assign(require('./fsp/fsp'), {
        exists: require('./fsp/exists'),
    }),
    path: {
        doesPathBreakOut: require('./path/doesPathBreakOut'),
    },
});


module.exports = nodeApi;