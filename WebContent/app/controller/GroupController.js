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
     		'groupdialog': {
				afterlayout: this.onDialogAfterDialog
			}
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
    },
    
    onGetDataFailure: function(response){
	},
	onGetDataSuccess:function(record){
		//this.getPermissionList().grid.getSelectionModel().select(record.permissions().getRange());
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
	onDialogAfterDialog:function(dialog){
		var me = this;
		var form = this.getDialog().down('form');
		
		if(form.getRecord()){
			Ext.Array.each(form.getRecord().get('permissions'), function(id, index) {
				var record = me.getPermissionList().grid.getStore().getById(id)
			    me.getPermissionList().grid.getSelectionModel().select(record,true);
			});
		}
	},
	onSaveDataFailure: function(){
	},
	onSaveDataSuccess: function(){
	}
    
});