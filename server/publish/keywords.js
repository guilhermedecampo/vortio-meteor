/*****************************************************************************/
/* Keywords Publish Functions
/*****************************************************************************/

Meteor.publish('Keywords', function (user) {
    if (AuthManager.userIsInRole(user, ['admin'])) {
      return Keywords.find({});
    }
	return Keywords.find({term: {$in : user.profile.keywords}});
});
