const functions = require("firebase-functions");
const apiHandler = require('./handler/app.js')
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.api = functions.https.onRequest(apiHandler.callback())
