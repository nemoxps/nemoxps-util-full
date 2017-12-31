/**
 * Generates flags for a set of variables.
 */
let flagGenerator = function* () {
    let flag = 1;
    yield flag;
    while (true)
      yield (flag <<= 1);
};

/**
 * Generates flags for a set of flag names.
 *
 * @param {...(string|number)} flagNames One or more flag names.
 * @returns {Object} An object that maps flag names to flags.
 */
flagGenerator.for = (...flagNames) => {
    let r = {};
    let iterator = flagGenerator();
    for (let flagName of flagNames)
      r[flagName] = iterator.next().value;
    return r;
};


module.exports = flagGenerator;