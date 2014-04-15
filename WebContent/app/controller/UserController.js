Ext.define('AboutUs.controller.UserController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['UserStore'],

    models: ['Person',
    		 'User',
    		 'Church',
    		 'Permission'],

    views: ['user.List',
    		'user.Dialog',
    		'user.TabPanel',
    		'user.TabUserData',
    		'user.TabUserPermission'],
    
    refs: [{
        ref: 'userList',
        selector: 'userlist'
    },{
    	ref: 'userDialog',
    	selector: 'userdialog'
    },{
    	ref: 'groupList',
    	selector: 'usertabuserpermission grouplist'
    },{
    	ref: 'permissionList',
    	selector: 'usertabuserpermission permissionlist'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.user.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		var form = this.getUserDialog().down('form');

		var groups = this.getGroupList().grid.getSelectionModel().getSelection();
		var permissions = this.getPermissionList().grid.getSelectionModel().getSelection();
		form.getRecord().set('groups',[1]);
		form.getRecord().set('permissions',[1,2]);
		
	},
	
	onGetDataSuccess:function(record){
		var me = this;
		var form = this.getUserDialog().down('form');
		
		Ext.Array.each(record.get('groups'), function(id, index) {
			var record = me.getGroupList().grid.getStore().getById(id)
		    me.getGroupList().grid.getSelectionModel().select(record);
		});
		
		
	}
    
});