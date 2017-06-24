/**
 * Generates flags for a set of variables.
 */
let flagGenerator = function* () {
    let flag = 1;
    yield flag;
    while (true)
      yield (flag <<= 1);
};


module.exports = flagGenerator;