GraphController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe("Stream", this.params._id);
  },

  data: function () {
  	return Streams.findOne(this.params._id);
  },

  action: function () {
    this.render();
  }
});
