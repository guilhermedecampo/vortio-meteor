KeywordsController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe("Keywords");
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
