let test = require('tape');

let age = require('../src/Date/age');
let { diff } = age;


test('Date#age', (t) => {
    let fn = age;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    tt([new Date(1997, 3, 20, 1, 1, 1, 1), new Date(2017, 3, 15, 19, 31, 46, 501)], {
        years: 19,
        days: 7300,
        hours: 175218,
        minutes: 10513110,
        seconds: 630786645,
        exact: {
            years: 19.988414684804667,
            days: 7300.771359953703,
            hours: 175218.51263888887,
            minutes: 10513110.758333333,
            seconds: 630786645.5,
        },
    });
    
    t.test('Date#age.diff', (t) => {
        let fn = diff;
        let tt = (args, expected, msg) => {
            t.deepEqual(fn(...args), expected, msg);
        };
        
        let date1 = new Date(1990, 3, 15, 1, 1, 1, 1), date2 = new Date(1997, 3, 20, 19, 31, 46, 501);
        let res = {
            years: 7,
            days: 2562,
            hours: 61506,
            minutes: 3690390,
            seconds: 221423445,
            exact: {
                years: 7.0158119450786405,
                days: 2562.7713599537037,
                hours: 61506.51263888889,
                minutes: 3690390.7583333333,
                seconds: 221423445.5,
            },
        };
        tt([date1, date2], Object.assign({}, res, { older: 0, younger: 1 }));
        tt([date2, date1], Object.assign({}, res, { older: 1, younger: 0 }));
        
        t.end();
    });
    
    t.end();
});