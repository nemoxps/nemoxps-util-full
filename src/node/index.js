let api = require('../');


let nodeApi = Object.assign({}, api, {
    fsp: Object.assign(require('./fsp/fsp'), {
        dirTree: require('./fsp/dirTree'),
        exists: require('./fsp/exists'),
    }),
    path: {
        doesPathBreakOut: require('./path/doesPathBreakOut'),
    },
});


module.exports = nodeApi;