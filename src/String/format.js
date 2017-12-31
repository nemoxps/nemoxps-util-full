let at = require('../Array/at');


/**
 * Trims leading whitespace of every line in template literal strings.
 * Supports array flattening.
 *
 * @param {string[]} literals_ (Template Literal String)
 * @param {...*} substitutions (Template Literal String)
 * @returns {string} The formatted template literal string.
 */
let format = (literals_, ...substitutions) => {
    let literals = Array.from(literals_);
    literals[0] = literals[0].split('\n').slice(1).join('\n');
    literals[literals.length - 1] = at(literals, -1).split('\n').slice(0, -1).join('\n');
    
    let rIndentation = /^[ \t]*/;
    let baseIndentation = literals[0].split('\n')[0].match(rIndentation)[0];
    let trimIndentation = (str) => str.split('\n').map((line) => line.replace(baseIndentation, '')).join('\n');
    let str = '';
    
    for (let i = 0, l = substitutions.length; i < l; i++)
    {
      let literal = literals[i], substitution = substitutions[i];
      let lit = trimIndentation(literal);
      let sub;
      
      if ((Array.isArray(substitution)))
      {
        let lines = lit.split('\n');
        let lastLine = at(lines, -1);
        let indentation = lastLine.match(rIndentation)[0];
        if (indentation === lastLine)
        {
          lines[lines.length - 1] = '';
          lit = lines.join('\n');
          sub = substitution.map((val) => indentation + val).join('\n');
        }
        else
          sub = substitution.join(', ');
      }
      else
        sub = substitution;
      
      str += lit + sub;
    }
    str += trimIndentation(at(literals, -1));
    
    return str;
};


module.exports = format;