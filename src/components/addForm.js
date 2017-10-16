import React from 'react';
var ReactCreateClass = require('create-react-class');

var Addform =  ReactCreateClass({
  render: function () {
    return (
      <div className="add-form">
        <panel className="c12">
          <h3>Add Video</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Video Title</label><br/>
              <input type="text" className="form-control" ref="title"/>
            </div>
            <div className="form-group">
              <label>Video ID</label><br/>
              <input type="text" className="form-control" ref="video_id"/>
            </div>
            <div className="form-group">
              <label>Video Description</label><br/>
              <textarea type="text" className="form-control" ref="description"></textarea>
            </div>
            <button type="submit" className="button">Add</button>
          </form>
        </panel>
      </div>
    )
  },
    onSubmit:function(e){
      e.preventDefault();
      var video={
        title:this.refs.title.value.trim(),
        video_id:this.refs.video_id.value.trim(),
        description: this.refs.description.value.trim()
      };

  }
});

export default Addform;
