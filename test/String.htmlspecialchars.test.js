let test = require('tape');

let htmlspecialchars = require('../src/String/htmlspecialchars');
let { reverse } = htmlspecialchars;


test('String#htmlspecialchars', (t) => {
    let fn = htmlspecialchars;
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), expected, msg);
    };
    
    tt(
        '<div class="myClass">My `div` is not your\'s & so on...</div>',
        '&lt;div class=&quot;myClass&quot;&gt;My `div` is not your&#x27;s &amp; so on...&lt;/div&gt;'
    );
    
    t.test('String#htmlspecialchars.reverse', (t) => {
        let fn = reverse;
        let tt = (arg, expected, msg) => {
            t.equal(fn(arg), expected, msg);
        };
        
        tt(
            '&lt;div class=&quot;myClass&quot;&gt;My &#x60;div&#x60; is not your&#x27;s &amp; so on...&lt;/div&gt;',
            '<div class="myClass">My &#x60;div&#x60; is not your\'s & so on...</div>'
        );
        
        t.end();
    });
    
    t.end();
});