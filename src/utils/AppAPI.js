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
    },
    getVideo: function(){
        var ref = Firebase.database().ref('videos');
        ref.on('value',function (snapshot) {
            var videos =[];
            snapshot.forEach(function (childSnapshot) {
                console.log(childSnapshot.val());
                var video ={
                    id: childSnapshot.key,
                    title: childSnapshot.val().title,
                    video_id: childSnapshot.val().video_id,
                    description: childSnapshot.val().description
                };
                videos.push(video);
                AppActions.receiveVideos(videos);
            })
        })
    },
    deleteVideo: function (videoId) {
        var ref = Firebase.database().ref('videos');
        ref.on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if(childSnapshot.val().video_id ==videoId){
                    ref.child(childSnapshot.key).remove();
                }
            });
        });
    }
};