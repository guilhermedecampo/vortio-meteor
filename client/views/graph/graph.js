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
});

/*****************************************************************************/
/* Graph: Lifecycle Hooks */
/*****************************************************************************/
Template.Graph.created = function () {
};

Template.Graph.rendered = function () {
  Deps.autorun(function () {
    stream = Streams.findOne();
    if (stream) {
      first_date = moment(stream.first_date);
      last_date = moment(stream.last_date);

      days = last_date.dayOfYear() - first_date.dayOfYear();

      options = {
        period: (days > 2) ? 'day' : 'hour',
        stream: stream.id
      };

      generateStream(options);
    }
  });
};

Template.graphSidebar.rendered = function () {
  $('#datepicker').datepicker({
    startDate: "07/14/2014",
    endDate: "07/30/2014",
    todayBtn: "linked",
    multidate: false,
    autoclose: true,
    todayHighlight: true
  });
};

Template.Graph.destroyed = function () {
};
