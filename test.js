// https://github.com/auth0/node-jsonwebtoken
'use strict'
const fs = require('fs');
const jwt = require('jsonwebtoken');

// payload
let payload = {
    data1: "data 1",
    data2: "data 2",
    data3: "data 3",
    data4: "data 4",
};

// private and public key
let privateKey = fs.readFileSync('jwt', 'utf8');
let publicKey = fs.readFileSync('jwt.pub', 'utf8');

let signOptions = {
    issuer: 'my soft corp', //software organization who issues the token
    subject: 'some@user.com', //intended user of the token
    audience: 'http://mysoftcorp.com', //basically identity of the intended recipient of the token
    expiresIn: '36h', //expiration time after which the token will be invalid
    algorithm: 'RS256' //encryption algorithm to be used to protect the token
};

let token = jwt.sign(payload, privateKey, signOptions)

// safe storing for token 

let verifyOptions = {
    issuer: 'my soft corp', //software organization who issues the token
    subject: 'some@user.com', //intended user of the token
    audience: 'http://mysoftcorp.com', //basically identity of the intended recipient of the token
    expiresIn: '36h', //expiration time after which the token will be invalid
    algorithm: 'RS256' //encryption algorithm to be used to protect the token
};

var legit = jwt.verify(token, publicKey, verifyOptions)
var d = new Date();
let {iat,exp}=legit

function timestampToDate(timestamp){
    let date=new Date(timestamp*1000)
    return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`
}
console.log(timestampToDate(iat))
console.log(timestampToDate(exp))


// const dates = dates_as_int.map(date => new Date(date).getTime())

// function showDates(legit){
//     return {
//         iat:,
//         nbf:,
//         exp:,
//     }
// } 

function invalidateToken(token){

    var older_token = jwt.sign({  iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
}