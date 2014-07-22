GraphController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe("Streams");
  },

  data: function () {
  	currentStream = Streams.findOne(this.params._id);
  	Session.set('currentStream', currentStream);
  	return currentStream;
  },

  action: function () {
    this.render();
  }
});
