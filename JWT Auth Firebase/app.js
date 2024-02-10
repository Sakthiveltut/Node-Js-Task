const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase/app');
require('firebase/auth');
const admin = require('firebase-admin');
const authRoutes = require('./routes/authRoutes');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://email-auth-d9f15-default-rtdb.firebaseio.com',
});

// Add Firebase SDK Snippet
const firebaseConfig = {
    apiKey: "AIzaSyBdCU0fOrR7PX3Dak42BCywWlpe-vDcUok",
    authDomain: "email-auth-d9f15.firebaseapp.com",
    databaseURL: "https://email-auth-d9f15-default-rtdb.firebaseio.com",
    projectId: "email-auth-d9f15",
    storageBucket: "email-auth-d9f15.appspot.com",
    messagingSenderId: "1063954326121",
    appId: "1:1063954326121:web:c48245f97a06ff268cf8f8",
    measurementId: "G-6NLQN84QRN"};

firebase.initializeApp(firebaseConfig);

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);

// PORT
const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
