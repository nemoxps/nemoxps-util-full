let test = require('tape');

let matchAll = require('../src/String/matchAll');


test('String#matchAll', (t) => {
    let fn = matchAll;
    let tt = (args, expected, msg) => {
        t.deepEqual([...fn(...args)], expected, msg);
    };
    
    let str = 'test-1 test-2 test-3';
    let matches = [
        ['test-1', '1'],
        ['test-2', '2'],
        ['test-3', '3'],
    ];
    matches.forEach((match, index) => {
        match.index = (str.split(' ')[0].length + 1) * index;
        match.input = str;
    });
    
    tt([str, /test-(.)/], [matches[0]]);
    tt([str, /test-(.)/g], matches);
    
    t.end();
});