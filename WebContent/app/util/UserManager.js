Ext.define('AboutUs.util.UserManager', {
    
    singleton: true,
    
    user: null,
    
    setUser: function(user){
    	this.user = user;
    },
    
    getUser: function(){
    	return this.user;
    },
    
    hasPermission: function(permissionId){
    	var permissionStore = this.getUser().permissions();
    	var record = permissionStore.find('id',permissionId);
    	if (record > -1){
    		return true;
    	}else{
    		return false;
    	}
    }
    
});