var React = require('react');
var CreateReactClass = require('create-react-class');
var Video = require('./Video');

var VideoList= CreateReactClass({

    render: function(){
        return (<div className='row'>
            {
                this.props.videos.map(function (video, index) {
                    return (<Video video={video} key={index} />);
                })
            }
        </div> );
    }
});
module.exports = VideoList;