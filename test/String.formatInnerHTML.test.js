let test = require('tape');

let formatInnerHTML = require('../src/String/formatInnerHTML');


test('String.formatInnerHTML', (t) => {
    t.equal(formatInnerHTML`
        <div class="myClass">
          Some content.
        </div>
    `, `

  <div class="myClass">
    Some content.
  </div>

    `.replace(/^\n|\n *$/g, ''));
    t.equal(formatInnerHTML`
        <div class="myClass">
          ${['Some', 'content', 'in', 'lines']}.
        </div>
    `, `

  <div class="myClass">
    Some
    content
    in
    lines.
  </div>

    `.replace(/^\n|\n *?$/g, ''));
    
    t.end();
});