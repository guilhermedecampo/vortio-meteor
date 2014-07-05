/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
	prettifyDate: function(date){
		var newDate = moment(date);
		return newDate.format("dddd, MMMM Do YYYY, h:mm:ss a");;
	}
};

_.each(App.helpers, function (helper, key) {
  UI.registerHelper(key, helper);
});