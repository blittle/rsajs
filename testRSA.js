var RSA = require('./rsa');


var testRSA   = new RSA(),
//var testRSA   = new RSA({q: 199, p: 211, d: 227}),
    msg       = 'Hello whats up dawg how are you?';        

var encrypted = testRSA.encrypt(msg);
var decrypted = testRSA.decrypt(encrypted);

console.log('encrypting: ' + msg);
console.log('encrypted : ' + encrypted);
console.log('decrypted : ' + decrypted);
