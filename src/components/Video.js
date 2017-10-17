var React = require('react');
var CreateReactClass = require('create-react-class');
var AppAction = require('../actions/AppActions');

var Video = CreateReactClass({
    render: function(){
        var link = "https://www.youtube.com/embed/"+this.props.video.video_id;
        return (<div className='c4'>
            <h5>{this.props.video.title}
            <span className="delete"><a onClick={this.onDelete.bind(this,this.props.video.video_id)}>X</a></span></h5>
            <iframe width="360" height="285"
                    src={link}
                    frameBorder="0" allowFullScreen></iframe>
            <p>{this.props.video.description}</p>
        </div>);
    },
    onDelete: function (i) {
        AppAction.deleteVideo(i);
    }
});

module.exports = Video;