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
    		ref: 'groupDialog',
    		selector: 'groupdialog'
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
		var form = this.getGroupDialog().down('form');
		
		var myItems = this.getPermissionList().getSelectionModel().getSelection();
		var myJson = [];
		for (var i in myItems) {
		    myJson.push(myItems[i].data);
		}

		var json = Ext.encode(myJson);
		
		form.getForm().findField('permissions').setValue(json);
		
	},
	onSaveDataFailure: function(){
	},
	onSaveDataSuccess: function(){
	}
    
});