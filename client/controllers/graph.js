GraphController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe("Streams");
  },

  data: function () {
  	return Streams.findOne(this.params._id);
  },

  action: function () {
    this.render();
  }
});
