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
  graphSource: function() {
    idValue = Session.get('graphStreamId');
    if (Session.equals('graphStreamType', 'keyword')){
      return 'http://login.vortio.com:3000/streamgraph/keyword/' + idValue;
    }else{
      return 'http://login.vortio.com:3000/streamgraph/stream/' + idValue + '/hour';
    }
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
