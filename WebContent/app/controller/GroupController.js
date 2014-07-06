Ext.define('AboutUs.controller.GroupController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['GroupStore',
    		 'PermissionStore'],

    models: ['Group',
    		 'Permission'],

    views: ['group.List',
    		'group.Dialog',
    		'group.PermissionList'],
    
    refs: [{
        	ref: 'grouplist',
        	selector: 'groupList'
   		},{
    		ref: 'dialog',
    		selector: 'groupdialog',
    		autoCreate:true,
        	xtype:'groupdialog'
		},{
	    	ref: 'permissionList',
    		selector: 'permissionlist'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.group.List');
    	centerContainer.add(list);
    	//list.getStore().clearFilter();
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onAfterAdd: function(button, event, options) {
    	console.log('GroupController.onAfterAdd()');
    	this.getPermissionList().getStore().load();
    },
    
    onGetDataFailure: function(response){
	},
	onGetDataSuccess:function(record){
		this.getPermissionList().grid.getSelectionModel().select(record.permissions().getRange());
	},
	onBeforeSaveData: function(){
		var form = this.getDialog().down('form');

		var permissions = this.getPermissionList().grid.getSelectionModel().getSelection();
		
		var permissionsId = new Array();
		Ext.Array.each(permissions, function(record, index) {
			permissionsId.push(record.getId());
		});
		
		form.getRecord().set('permissions',permissionsId);
		
	},
	onSaveDataFailure: function(){
	},
	onSaveDataSuccess: function(){
	}
    
});