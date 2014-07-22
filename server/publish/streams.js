/*****************************************************************************/
/* Streams Publish Functions
/*****************************************************************************/

Meteor.publish('Streams', function () {
	return Streams.find({count: {$gt: 0}});
});


Meteor.publish('Stream', function (id) {
	return Streams.find({_id: id, count: {$gt: 0}});
});
