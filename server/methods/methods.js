Meteor.methods({
  getKeywords: function () {
    Keywords.remove({});
    HTTP.get("http://login.vortio.com:3000/keywords",
      function (error, result) {
        if (!error) {
          result.data.forEach( function(Keyword){
            Keywords.insert(Keyword);
          });
        }else{
          console.error(error);
        }
      });
    return;
  },
  getStreamsByKeyword: function(keyword) {
    Streams.remove({query: keyword});
    HTTP.get('http://login.vortio.com:3000/streams?keyword=' + keyword, 
      function (error, result){
        result.data.forEach( function(stream) {
          Streams.insert(stream);
        });
      });
    return;
  },
  createUsers: function(data) {
    id = Accounts.createUser({
      email: data.email,
      password: data.password,
      profile: { 
        name: data.name,
        lastname: data.lastname,
        keywords: data.keywords 
      }
    }); 
    AuthManager.addUsersToRoles(id, [data.roles]);
    return;
  }
});