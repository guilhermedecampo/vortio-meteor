/*****************************************************************************/
/* AdminUsers Publish Functions
/*****************************************************************************/

Meteor.publish('admin_users', function () {
	return Meteor.users.find({});
});
