RSA.js
=====

RSA Public Key Cryptography

A basic javascript implementation of the public-key cryptography algorithm described in the paper: 
"A Method for Obtaining Digital Signatures and Public-Key Cryptosystems" 

Available at:  people.csail.mit.edu/rivest/Rsapaper.pdf

# Basic example

~~~ js
var RSACrypt = require('./rsa');
var rsa = new RSACrypt();

rsa.encrypt('Hello whats up dawg how are you?');
~~~

