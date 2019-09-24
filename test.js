const fs = require('fs');
const jwt = require('jsonwebtoken');

// PAYLOAD
let payload = {
    data1: "Data 1",
    data2: "Data 2",
    data3: "Data 3",
    data4: "Data 4",
};

// PRIVATE and PUBLIC key
let privateKey = fs.readFileSync('jwt', 'utf8');
let publicKey = fs.readFileSync('jwt.pub', 'utf8');

// Base64 encode some secret file
let secret = fs.readFileSync('./secret', 'utf8');
let encodeddata = fs.readFileSync('./secretbase64', 'utf8');
let buff = Buffer.from(encodeddata.toString(), 'base64');

let signOptions = {
    issuer: 'My Soft Corp', //Software organization who issues the token
    subject: 'some@user.com', //Intended user of the token
    audience: 'http://mysoftcorp.com', //Basically identity of the intended recipient of the token
    expiresIn: '12h', //Expiration time after which the token will be invalid
    algorithm: 'RS256' //Encryption algorithm to be used to protect the token } 
}
let token = jwt.sign(JSON.stringify(payload), privateKey, { algorithm: 'RS256' }) 

let verifyOptions = {
    issuer: 'My Soft Corp', //Software organization who issues the token
    subject: 'some@user.com', //Intended user of the token
    audience: 'http://mysoftcorp.com', //Basically identity of the intended recipient of the token
    expiresIn: '12h', //Expiration time after which the token will be invalid
    algorithm: 'RS256' //Encryption algorithm to be used to protect the token
};
console.log(token)

var legit = jwt.verify(token, publicKey, {algorithm: 'RS256'});

console.log(JSON.stringify(legit))