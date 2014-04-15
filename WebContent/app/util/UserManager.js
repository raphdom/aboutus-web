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
    	var permissions = this.getUser().get('permissions')
    	if (Ext.Array.contains(permissions,permissionId)){
    		return true;
    	}else{
    		return false;
    	}
    }
    
});