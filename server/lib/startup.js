  Meteor.startup(function () {

  	//Populate users when empty
	if (Meteor.users.findOne({}) === undefined){
		var users = [
		{ name:"Caio Pinna", email:"caio@cyclumsn.com", roles:['admin']},
		{ name:"Braulio Medina", email:"brauliomedina@vortio.com", roles:['admin']},
		{ name:"Tester", email:"tester@vortio.com", roles:['user']},
		]; 

		_.each(users, function (user) {
			var id;

			id = Accounts.createUser({
				email: user.email,
				password: "vortio2014",
				profile: { name: user.name }
			}); 

			if (user.roles.length > 0) {
				AuthManager.addUsersToRoles(id, user.roles);
			}
			console.log("User database empty, new user %s created", user.name);
		});
	}

  });