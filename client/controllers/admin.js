AdminController = RouteController.extend({
  waitOn: function () {
  	if (!AuthManager.userIsInRole(Meteor.user(), ['admin'])) {
      return Router.go('dashboard');
    }
    Meteor.subscribe('admin_users');
    Meteor.subscribe("Keywords", Meteor.user());
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
