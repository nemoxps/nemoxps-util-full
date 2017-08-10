let test = require('tape');

let formatInnerHTML = require('../src/String/formatInnerHTML');


test('String.formatInnerHTML', (t) => {
    let cutTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    
    t.equal(
        formatInnerHTML`
            <div class="myClass">
              Some content.
            </div>
        `,
        cutTemplateString(`

  <div class="myClass">
    Some content.
  </div>

        `)
    );
    
    t.equal(
        formatInnerHTML`
            <div class="myClass">
              ${['Some', 'content', 'in', 'lines']}.
            </div>
        `,
        cutTemplateString(`

  <div class="myClass">
    Some
    content
    in
    lines.
  </div>

        `)
    );
    
    t.end();
});