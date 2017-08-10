let test = require('tape');

let toMapObj = require('../src/Object/toMapObj');


test('Object.toMapObj', (t) => {
    let obj = {
        abc: 'abc',
        def: ['def'],
        ghi: new class {}(),
        jkl: null,
        mno: Object.assign(Object.create(null), { mno: 'mno' }),
        pqr: { pqr: 'pqr', stu: { stu: 'stu' } },
    };
    
    let mobj = toMapObj(obj);
    t.deepEqual(mobj, obj);
    t.equal(Object.getPrototypeOf(mobj), null);
    t.notEqual(Object.getPrototypeOf(mobj.pqr), null);
    t.notEqual(Object.getPrototypeOf(mobj.pqr.stu), null);
    
    mobj = toMapObj(obj, true);
    t.equal(Object.getPrototypeOf(mobj), null);
    t.equal(Object.getPrototypeOf(mobj.pqr), null);
    t.equal(Object.getPrototypeOf(mobj.pqr.stu), null);
    
    t.end();
});