/**
 * Description: The script provides a set of methods to access the role of a given logged in user
 */
var UserMgt = {};
(function() {
    var carbon = require('carbon');
    var userManager;

    var init = function() {
    	var config=require('/configs/carbon-sample.json');

        var serverUrl = config.server.https; //configs.get('server.https');
        var server = new carbon.server.Server({
            url: serverUrl
        });
        userManager=new carbon.user.UserManager(server);
    };
    /**
     * The function obtains an instance of the currently logged in user
     * @param  {[type]} session [description]
     * @return A carbon.user.User object
     */
    var getLoggedInUser=function(session){
        return createUser('admin');
    };
    /**
     * The function creates an instance of the User class for the provided
     * username
     * @param  {[type]} username [description]
     * @return {[type]}          [description]
     */
    var getUser=function(username){
    	return createUser(username);
    };

    var createUser=function(username){
    	return new carbon.user.User(userManager,username);
    }
    UserMgt.init = init;
    UserMgt.getLoggedInUser = getLoggedInUser;
    UserMgt.getUser=getUser;
}());