let roundPrecision = (type, num, precision) => {
    if (!precision)
      return Math[type](num);
    
    let pair = (String(num) + 'e').split('e');
    let value = Math[type](Number(pair[0] + 'e' + (Number(pair[1]) - precision)));
    pair = (String(value) + 'e').split('e');
    return Number(pair[0] + 'e' + (Number(pair[1]) + precision));
};


module.exports = roundPrecision;