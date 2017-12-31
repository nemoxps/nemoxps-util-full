let api = require('../');


let browserApi = Object.assign({}, api, {
    Element: {
        create: require('./Element/create'),
        getStyle: require('./Element/getStyle'),
    },
    
    Node: {
        insertAfter: require('./Node/insertAfter'),
    },
});


module.exports = browserApi;