/* eslint-disable global-require */
let api = {
    clone: require('./clone'),
    flagGenerator: require('./flagGenerator'),
    type: require('./type'),
    
    Array: {
        flatten: require('./Array/flatten'),
        insertBetween: require('./Array/insertBetween'),
        nth: require('./Array/nth'),
        pull: require('./Array/pull'),
        remove: require('./Array/remove'),
        shuffle: require('./Array/shuffle'),
        unique: require('./Array/unique'),
    },
    
    Map: {
        entries: require('./Map/entries'),
        keys: require('./Map/keys'),
        values: require('./Map/values'),
    },
    
    Math: {
        ceil: require('./Math/ceil'),
        floor: require('./Math/floor'),
        random: require('./Math/random'),
        round: require('./Math/round'),
    },
    
    Number: {
        inRange: require('./Number/inRange'),
    },
    
    Object: {
        defineProps: require('./Object/defineProps'),
        every: require('./Object/every'),
        filter: require('./Object/filter'),
        find: require('./Object/find'),
        findKey: require('./Object/findKey'),
        fromEntries: require('./Object/fromEntries'),
        isObject: require('./Object/isObject'),
        isPlainObject: require('./Object/isPlainObject'),
        map: require('./Object/map'),
        mapKeys: require('./Object/mapKeys'),
        mapValues: require('./Object/mapValues'),
        pick: require('./Object/pick'),
        pickNot: require('./Object/pickNot'),
        reduce: require('./Object/reduce'),
        some: require('./Object/some'),
        toMapObj: require('./Object/toMapObj'),
    },
    
    String: {
        format: require('./String/format'),
        formatInnerHTML: require('./String/formatInnerHTML'),
        htmlspecialchars: require('./String/htmlspecialchars'),
        indent: require('./String/indent'),
        matchAll: require('./String/matchAll'),
        regexpspecialchars: require('./String/regexpspecialchars'),
        reindent: require('./String/reindent'),
        stripIndent: require('./String/stripIndent'),
        template: require('./String/template'),
    },
};


module.exports = api.Object.toMapObj(api, true);