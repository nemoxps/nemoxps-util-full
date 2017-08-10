let test = require('tape');

let htmlspecialchars = require('../src/String/htmlspecialchars');


test('String#htmlspecialchars', (t) => {
    t.equal(
        htmlspecialchars('<div class="myClass">My `div` is not your\'s & so on...</div>'),
        '&lt;div class=&quot;myClass&quot;&gt;My &#x60;div&#x60; is not your&#x27;s &amp; so on...&lt;/div&gt;'
    );
    
    t.end();
});