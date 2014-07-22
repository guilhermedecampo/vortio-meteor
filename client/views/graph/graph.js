/*****************************************************************************/
/* Graph: Event Handlers and Helpers */
/*****************************************************************************/
Template.Graph.events({
  'click .btn-change-period': function(e, t){
    options = {
      period: e.target.value,
      stream: Session.get('currentStream').id
    }
    generateStream(options);
  }
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

  generateStream(options);
};

Template.Graph.destroyed = function () {
};
