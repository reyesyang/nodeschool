function LoadUsers(userIds, load, done) {
  var users = [];
  var completed = 0;

  // for(var i = 0; i < userIds.length; i++) {
  //   users.push(load(userIds[i]));
  // }

  userIds.forEach(function(userId, index) {
    load(userId, function(user) {
      users[index] = user;

      if(++completed == userIds.length) {
        return done(users);
      }
    });
  })
}

module.exports = LoadUsers;
