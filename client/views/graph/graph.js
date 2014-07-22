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
  first_date = moment(Session.get('currentStream').first_date);
  last_date = moment(Session.get('currentStream').last_date);

  days = last_date.dayOfYear() - first_date.dayOfYear();

  options = {
    period: (days > 2) ? 'day' : 'hour',
    stream: Session.get('currentStream').id
  };

  data = getStreamData(options, function(reponse){
    drawStream(reponse, options.period);
  });
};

Template.Graph.destroyed = function () {
};
