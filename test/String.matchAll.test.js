let test = require('tape');

let matchAll = require('../src/String/matchAll');


test('String.matchAll', (t) => {
    let str = 'test-1 test-2 test-3';
    let matches = [
        ['test-1', '1'],
        ['test-2', '2'],
        ['test-3', '3']
    ];
    matches.forEach((match, index) => {
        match.index = 7 * index;
        match.input = str;
    });
    
    t.deepLooseEqual([...matchAll(str, /test-(.)/g)], matches);
    t.deepLooseEqual([...matchAll(str, /test-(.)/)], matches);
    
    t.end();
});