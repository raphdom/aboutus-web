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
    	ref: 'dialog',
    	selector: 'userdialog',
    	autoCreate:true,
        xtype:'userdialog'
    },{
    	ref: 'groupList',
    	selector: 'usertabuserpermission grouplist'
    },{
    	ref: 'permissionList',
    	selector: 'usertabuserpermission permissionlist'
    }],
    
    init: function() {
        this.control({
     		'userdialog': {
				afterlayout: this.onDialogAfterDialog
			}
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.user.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		var form = this.getDialog().down('form');

		var groups = this.getGroupList().grid.getSelectionModel().getSelection();
		var permissions = this.getPermissionList().grid.getSelectionModel().getSelection();
		
		var groupsId = new Array();
		Ext.Array.each(groups, function(record, index) {
			groupsId.push(record.getId());
		});
		var permissionsId = new Array();
		Ext.Array.each(permissions, function(record, index) {
			permissionsId.push(record.getId());
		});
		
		form.getRecord().set('groups',groupsId);
		form.getRecord().set('permissions',permissionsId);
		
	},
	
	onDialogAfterDialog:function(dialog){
		var me = this;
		var form = this.getDialog().down('form');
		
		if(form.getRecord()){
			Ext.Array.each(form.getRecord().get('groups'), function(id, index) {
				var record = me.getGroupList().grid.getStore().getById(id)
			    me.getGroupList().grid.getSelectionModel().select(record,true);
			});
			Ext.Array.each(form.getRecord().get('permissions'), function(id, index) {
				var record = me.getPermissionList().grid.getStore().getById(id)
			    me.getPermissionList().grid.getSelectionModel().select(record,true);
			});
		}
	}
    
});