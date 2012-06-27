var Crypt = require('./crypt');

var testCrypt = new Crypt(),
	msg 	  = 'Hello whats up dawg how are you?';		

var encrypted = testCrypt.encrypt(msg);
var decrypted = testCrypt.decrypt(encrypted);

console.log('encrypting: ' + msg);
console.log('encrypted : ' + encrypted);
console.log('decrypted : ' + decrypted);