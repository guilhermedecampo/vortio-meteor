/*****************************************************************************/
/* Streams: Event Handlers and Helpers */
/*****************************************************************************/
Template.Streams.events({
  'change #keywordPick': function(e) {
    Session.set('keywordPick', e.target.value);
  },
  'click #reloadStreams': function() {
    Meteor.call('getStreamsByKeyword', Session.get('keywordPick'));
  },
  'click .button-graph': function(e) {
    Session.set('graphStreamType', 'stream');
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

Template.Streams.helpers({
  keywords: function() {
    return Keywords.find({});
  },
  streams: function() {
    return Streams.find({query: Session.get('keywordPick')});
  }
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
 });

/*****************************************************************************/
/* Streams: Lifecycle Hooks */
/*****************************************************************************/
Template.Streams.created = function () {
};

Template.Streams.rendered = function () {
  $("#keywordPick")[0].selectedIndex = 0;
  Session.set('keywordPick', $("#keywordPick").val());
};

Template.Streams.destroyed = function () {
};
