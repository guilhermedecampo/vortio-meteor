/*****************************************************************************/
/* Graph: Event Handlers and Helpers */
/*****************************************************************************/
Template.Graph.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Graph.helpers({
  streamId: function() {
    return Session.get('graphStreamId');
  }
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Graph: Lifecycle Hooks */
/*****************************************************************************/
Template.Graph.created = function () {
};

Template.Graph.rendered = function () {
};

Template.Graph.destroyed = function () {
};
