/* eslint-disable global-require */
let api = require('../');


let browserApi = Object.assign({}, api, {
    ajax: require('./ajax'),
    Storage: require('./Storage'),
    
    Element: {
        childIndex: require('./Element/childIndex'),
        create: require('./Element/create'),
        getStyle: require('./Element/getStyle'),
        removeWhitespaceNodes: require('./Element/removeWhitespaceNodes'),
    },
    
    Node: {
        insertAfter: require('./Node/insertAfter'),
    },
});


module.exports = api.Object.toMapObj(browserApi, true);