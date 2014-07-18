/*****************************************************************************/
/* Admin: Event Handlers and Helpers */
/*****************************************************************************/
Template.Admin.events({
  'click #newUser': function() {
    $("#userAdmin").empty();
    UI.insert(UI.render(Template.createUser), $('#userAdmin').get(0));
  }
});

Template.createUser.events({
  'click #cancelCreate': function() {
    $("#userAdmin").empty();
    UI.insert(UI.render(Template.listUsers), $('#userAdmin').get(0));
  },
  'submit #createUser': function(e, t) {
    e.preventDefault();
    data = {
      email: t.find('#email').value,
      name: t.find('#name').value,
      lastname: t.find('#lastname').value,
      password: t.find('#password').value,
      keywords: $('#keywords').val(),
      roles: t.find('#roles').value
    };

    Meteor.call('createUsers', data);
    $("#userAdmin").empty();
    UI.insert(UI.render(Template.listUsers), $('#userAdmin').get(0));
  }
});

Template.createUser.helpers({
  keywords: function() {
    return Keywords.find({});
  }
});

Template.listUsers.helpers({
  users: function() {
    return Meteor.users.find({});
  }
});

/*****************************************************************************/
/* Admin: Lifecycle Hooks */
/*****************************************************************************/
Template.Admin.created = function () {
};

Template.Admin.rendered = function () {
};

Template.Admin.destroyed = function () {
};
