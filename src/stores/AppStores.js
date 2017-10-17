var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';
var _videos=[];

var AppStores = assign({}, EventEmitter.prototype,{
    saveVideo: function(video){
        _videos.push(video);
    },
    getVideo(){
        return _videos;
    },
    setVideo(videos){
        _videos=videos;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change',callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change',callback);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.SAVE_VIDEO:
            console.log('SAVING...');
            AppStores.saveVideo(action.video);
            AppAPI.saveVideo(action.video);
            AppStores.emit(CHANGE_EVENT);
            break;
    }
    return true;
});
module.exports = AppStores;