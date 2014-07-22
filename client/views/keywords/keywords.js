/*****************************************************************************/
/* Keywords: Event Handlers and Helpers */
/*****************************************************************************/
Template.Keywords.events({
  'click #reloadKeywords': function() {
    Meteor.call('getKeywords');
    Meteor.call('checkApiHealth');
  }
});

Template.Keywords.helpers({
  keywords: function() {
    return Keywords.find({});
  }
});

/*****************************************************************************/
/* Keywords: Lifecycle Hooks */
/*****************************************************************************/
Template.Keywords.created = function () {
};

Template.Keywords.rendered = function () {
};

Template.Keywords.destroyed = function () {
};
