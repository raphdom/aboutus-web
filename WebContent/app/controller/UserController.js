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
		
		var permissions = this.getPermissionList().grid.getSelectionModel().getSelection();
		var church = form.down('churchcombo').store.findRecord('id',form.down('churchcombo').getValue());
		var person = form.down('personcombo').store.findRecord('id',form.down('personcombo').getValue());
		form.getRecord().setChurch(church);
		form.getRecord().setPerson(person);
		form.getRecord().permissions().add(permissions);
		
		var groups = this.getGroupList().grid.getSelectionModel().getSelection();
		form.getRecord().groups().add(groups);
		
	},
	
	onGetDataSuccess:function(record){
		
		var form = this.getUserDialog().down('form');
		
		if (record.getAssociatedData().person){
			form.down('personcombo').setValue(record.getPerson());
		}
		form.down('churchcombo').setValue(record.getChurch());
		
		this.getGroupList().grid.getSelectionModel().select(record.groups().getRange());
		this.getPermissionList().grid.getSelectionModel().select(record.permissions().getRange());
		
	}
    
});