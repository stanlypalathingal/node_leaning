var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr,true);

console.log(q.host)   // returns the lcoal host
console.log(q.pathname) // returns the pathname
console.log(q.search) // returns the query string

var qdata = q.query; // returns an object: {year:2017, month: 'february'}
console.log(qdata); // returns {year:2017, month: 'february'}
console.log(qdata.month); // returns february