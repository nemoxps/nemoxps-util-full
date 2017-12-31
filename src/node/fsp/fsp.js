let fs = require('fs');
let { promisify } = require('util');

let mapValues = require('../../Object/mapValues');


let fsp = mapValues(fs, (val) => (typeof val === 'function') ? promisify(val) : val, Object.create(null));


module.exports = fsp;