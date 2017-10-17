var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDZPLlN1JyRZq8nCGLKaNwui522H2hAGg4",
    authDomain: "ytgallery-2be0d.firebaseapp.com",
    databaseURL: "https://ytgallery-2be0d.firebaseio.com",
    projectId: "ytgallery-2be0d",
    storageBucket: "ytgallery-2be0d.appspot.com",
    messagingSenderId: "241271462657"
};
Firebase.initializeApp(config);

module.exports = {
    saveVideo: function(video){
        var ref = Firebase.database().ref('videos');
        ref.push(video);
    }
};