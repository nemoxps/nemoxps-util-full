let test = require('tape');

let parse = require('../src/Date/parse');


test('Date.parse', (t) => {
    let fn = parse;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args).getTime(), expected.getTime(), msg);
    };
    tt.null = (args, msg) => {
        t.equal(fn(...args), null, msg);
    };
    
    let year = new Date().getFullYear();
    
    tt(['2001-04-05T06:07:08'], new Date(2001, 3, 5, 6, 7, 8));
    tt(['2001-04-05T06:07'], new Date(2001, 3, 5, 6, 7));
    tt(['2001-04-05'], new Date(2001, 3, 5));
    tt(['20010405T060708'], new Date(2001, 3, 5, 6, 7, 8));
    tt(['20010405T0607'], new Date(2001, 3, 5, 6, 7));
    tt(['20010405'], new Date(2001, 3, 5));
    
    tt(['2001-April-05 Thursday 06:07:08.009 AM', 'YYYY-MMMM-DD dddd HH:mm:ss.SSS A'], new Date(2001, 3, 5, 6, 7, 8, 9));
    tt(['2001-Apr-05 Thu 06:07:08.009 AM', 'Y-MMM-DD ddd hh:mm:ss.SSS A'], new Date(2001, 3, 5, 6, 7, 8, 9));
    tt(['01-04-05 Th 6:07:08.09 am', 'YY-MM-DD dd H:mm:ss.SS a'], new Date(2001, 3, 5, 6, 7, 8, 90));
    tt(['01-4-5 4 6:7:8.9 am', 'Y-M-D d h:m:s.S a'], new Date(2001, 3, 5, 6, 7, 8, 900));
    tt(['01-4th-5th', 'YY-Mo-Do'], new Date(2001, 3, 5));
    
    tt(['2001-04-05 06:07:08.009', 'YYYY-MM-DD HH:mm:ss.SSS'], new Date(2001, 3, 5, 6, 7, 8, 9));
    tt(['04/05/2001 06:07:08.009', 'MM/DD/YYYY HH:mm:ss.SSS'], new Date(2001, 3, 5, 6, 7, 8, 9));
    tt(['05.04.2001 06:07:08.009', 'DD.MM.YYYY HH:mm:ss.SSS'], new Date(2001, 3, 5, 6, 7, 8, 9));
    tt(['20010405', 'YYYYMMDD'], new Date(2001, 3, 5));
    tt(['1 Feb 03 April', 'M MMM MM MMMM'], new Date(year, 3));
    tt(['05.04.2001 06:07:08.009', ['YYYYMMDD', 'MM/DD/YYYY HH:mm:ss.SSS', 'DD.MM.YYYY HH:mm:ss.SSS', 'MM.DD.YYYY HH:mm:ss.SSS']], new Date(2001, 3, 5, 6, 7, 8, 9));
    
    tt(['april 5, 2001', 'MMMM D, YYYY'], new Date(2001, 3, 5));
    tt(['apriL 5, 2001', 'MMMM D, YYYY'], new Date(2001, 3, 5));
    tt(['thursday, April 5, 2001', 'dddd, MMMM D, YYYY'], new Date(2001, 3, 5));
    tt(['thursdaY, April 5, 2001', 'dddd, MMMM D, YYYY'], new Date(2001, 3, 5));
    
    tt(['5th April, 6 AM', 'Do MMMM, h A'], new Date(year, 3, 5, 6));
    tt(['5th April, 6 PM', 'Do MMMM, h A'], new Date(year, 3, 5, 18));
    tt(['5th April, 12 AM', 'Do MMMM, h A'], new Date(year, 3, 5, 0));
    tt(['5th April, 12 PM', 'Do MMMM, h A'], new Date(year, 3, 5, 12));
    
    tt(['06:07:08 GMT-0500 (EST)', 'HH:mm:ss ZZ'], new Date(Date.UTC(year, 0, 1, 11, 7, 8)));
    tt(['06:07:08 GMT-0000 (UTC)', 'HH:mm:ss ZZ'], new Date(Date.UTC(year, 0, 1, 6, 7, 8)));
    tt(['06:07:08 -0000 (UTC)', 'HH:mm:ss ZZ'], new Date(Date.UTC(year, 0, 1, 6, 7, 8)));
    tt(['06:07:08 -0000', 'HH:mm:ss ZZ'], new Date(Date.UTC(year, 0, 1, 6, 7, 8)));
    tt(['06:07:08Z', 'HH:mm:ssZ'], new Date(Date.UTC(year, 0, 1, 6, 7, 8)));
    
    tt(['on 04/05/2001 at 06:07', '"on" MM/DD/YYYY "at" HH:mm'], new Date(2001, 3, 5, 6, 7));
    tt(['on 04/05/2001 at 06:07', '\'on\' MM/DD/YYYY \'at\' HH:mm'], new Date(2001, 3, 5, 6, 7));
    tt([' 04/05/2001  06:07', '"" MM/DD/YYYY "" HH:mm'], new Date(2001, 3, 5, 6, 7));
    tt([' 04/05/2001  06:07', '\'\' MM/DD/YYYY \'\' HH:mm'], new Date(2001, 3, 5, 6, 7));
    tt(['YY', '"YY"'], new Date(year, 0, 1));
    tt(['"01', '"YY'], new Date(2001, 0, 1));
    tt(['01', '""YY""'], new Date(2001, 0, 1));
    tt(['"', '"""'], new Date(year, 0, 1));
    tt(['2001\n04\n05\n', 'YYYY"\n"MM"\n"DD"\n"'], new Date(2001, 3, 5));
    
    tt.null(['hey', 'YYYY-MM-DD']);
    tt.null(['2001-9876-5432', 'YYYY-MM-DD']);
    tt.null(['5th Apri 2001', 'Do MMMM YYYY']);
    tt.null(['5th Ap 2001', 'Do MMM YYYY']);
    tt.null(['Sunda 4th 2001', 'dddd Mo YYYY']);
    tt.null(['Su 4th 2001', 'ddd Mo YYYY']);
    tt.null(['S 4th 2001', 'dd Mo YYYY']);
    tt.null(['5th 4th, 6 MM', 'Do Mo, h A']);
    
    t.end();
});