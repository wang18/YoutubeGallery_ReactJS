var AddForm =require('./components/addForm');
var React = require('react');
var ReactCreateClass = require('create-react-class');
var AppStore = require('./stores/AppStores');
var AppActions = require('./actions/AppActions');

function getAppState() {
    return {videos: AppStore.getVideo()};
}

var App =  ReactCreateClass({
    getInitialState(){
      return getAppState();
      },
    componentDidMount: function () {
      AppStore.addChangeListener(this._onChange);
    },
    componentUnmount: function(){
      AppStore.removeChangeListener(this._onChange);
    },
    render() {
    console.log(this.state.videos);
    return (
      <div className="App">
        <AddForm />
      </div>
    );
  },
  _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports =  App;