const express = require('express')
const app = express()
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

exports.app = functions.https.onRequest(app);