



var admin = require("firebase-admin");

var serviceAccount = require("../../sdk.json");

const connection=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default connection;
