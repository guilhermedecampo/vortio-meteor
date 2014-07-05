StreamsController = RouteController.extend({
  waitOn: function () {
  	  	Meteor.subscribe("Keywords");
  	  	Meteor.subscribe("Streams");
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
