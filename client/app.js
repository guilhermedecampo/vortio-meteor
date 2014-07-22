/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
	prettifyDate: function(date){
		var newDate = moment(date);
		return newDate.format("MMMM Do YYYY, h:mm a");
	}
};

_.each(App.helpers, function (helper, key) {
  UI.registerHelper(key, helper);
});