let api = {
    clone: require('./clone'),
    flagGenerator: require('./flagGenerator'),
    type: require('./type'),
    
    Array: {
        at: require('./Array/at'),
        chunk: require('./Array/chunk'),
        filterIndex: require('./Array/filterIndex'),
        flatten: require('./Array/flatten'),
        insertBetween: require('./Array/insertBetween'),
        pick: require('./Array/pick'),
        pickNot: require('./Array/pickNot'),
        pull: require('./Array/pull'),
        remove: require('./Array/remove'),
        shuffle: require('./Array/shuffle'),
        unique: require('./Array/unique'),
        zip: require('./Array/zip'),
    },
    
    Date: {
        add: require('./Date/add'),
        age: require('./Date/age'),
        birthdays: require('./Date/birthdays'),
        daysInMonth: require('./Date/daysInMonth'),
        format: require('./Date/format'),
        from: require('./Date/from'),
        inRange: require('./Date/inRange'),
        isLeapYear: require('./Date/isLeapYear'),
        leapDaysBetween: require('./Date/leapDaysBetween'),
        locales: require('./Date/locales'),
        parse: require('./Date/parse'),
        starSigns: require('./Date/starSigns'),
        toArray: require('./Date/toArray'),
    },
    
    Function: {
        debounce: require('./Function/debounce'),
        throttle: require('./Function/throttle'),
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
    },
    
    String: {
        anagrams: require('./String/anagrams'),
        format: require('./String/format'),
        htmlspecialchars: require('./String/htmlspecialchars'),
        indent: require('./String/indent'),
        matchAll: require('./String/matchAll'),
        regexpspecialchars: require('./String/regexpspecialchars'),
        reindent: require('./String/reindent'),
        stripIndent: require('./String/stripIndent'),
        template: require('./String/template'),
    },
};


module.exports = api;