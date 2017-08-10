let test = require('tape');

let getStyle = require('../../src/browser/Element/getStyle');


test('Element#getStyle', (t) => {
    let fixture = document.createElement('div');
    fixture.classList.add('test-getStyle');
    document.body.appendChild(fixture);
    
    t.deepEqual(getStyle(fixture, 'margin'), [11, 12, 13, 14]);
    t.deepEqual(getStyle(fixture, 'padding'), [21, 22, 23, 24]);
    t.deepLooseEqual(getStyle(fixture, 'border'), {
        width: [31, 32, 33, 34],
        style: ['solid', 'dotted', 'dashed', 'double'],
        color: ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'],
        radius: [1, 2, 3, 4],
    });
    t.equal(getStyle(fixture, 'display'), 'none');
    t.deepEqual(getStyle(fixture, 'padding', false), ['21px', '22px', '23px', '24px']);
    
    document.body.removeChild(fixture);
    
    t.end();
});