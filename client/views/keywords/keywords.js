/*****************************************************************************/
/* Keywords: Event Handlers and Helpers */
/*****************************************************************************/
Template.Keywords.events({
  'click #reloadKeywords': function() {
    Meteor.call('getKeywords');
    Meteor.call('checkApiHealth');
  },
  'click .button-graph': function(e) {
    Session.set('graphStreamType', 'keyword');
    Session.set('graphStreamId', e.target.id);
    Router.go('graph');
  }
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Keywords.helpers({
  keywords: function() {
    return Keywords.find({});
  }
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
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
