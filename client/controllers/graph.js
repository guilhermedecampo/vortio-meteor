GraphController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe("Streams");
  },

  onBeforeAction: function() {
    currentStream = Streams.findOne(this.params._id);
    Session.set('currentStream', currentStream);
  },

  data: function () {
  	return Streams.findOne(this.params._id);
  },

  action: function () {
    this.render();
  }
});
