KeywordsController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe("Keywords", Meteor.user());
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
