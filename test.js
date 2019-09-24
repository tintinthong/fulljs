let fs = require('fs');
let jwt = require('jsonwebtoken');

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

console.log(privateKey)
console.log(publicKey)

console.log(privateKey)
// Base64 encode some secret file
let secret = fs.readFileSync('./secret', 'utf8');
let encodeddata = fs.readFileSync('./secretbase64', 'utf8');
let buff = Buffer.from(encodeddata.toString(), 'base64');
console.log(buff.toString())

let signOptions = {
    issuer: 'My Soft Corp',
    subject: 'some@user.com',
    audience: 'http://mysoftcorp.com',
    expiresIn: '12h',
    algorithm: 'RS256'
}

//   jwt.sign(JSON.stringify(payload), secret, { algorithm: 'RS256' }, function (err) {
//     if (err) {
//       console.log(err)
//     }
//   })