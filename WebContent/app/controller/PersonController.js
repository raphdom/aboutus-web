Ext.define('AboutUs.controller.PersonController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['PersonStore'],

    models: ['Person','Address', 'Contact'],

    views: [
    		'person.List',
    		'person.Dialog',
    		'person.TabPanel',
    		'person.TabData',
    		'person.TabChurchData',
    		'person.TabAddress',
    		'person.TabContact',
    		'person.TabObservation'
    		],
    
    refs: [{
        ref: 'personList',
        selector: 'personlist'
    },{
    	ref: 'dialog',
    	selector: 'persondialog',
    	autoCreate:true,
        xtype:'persondialog'
    },{
    	ref: 'addressGrid',
    	selector: 'persontabaddress grid'
	 },{
    	ref: 'contactGrid',
    	selector: 'persontabcontact grid'
    }],
    
    init: function() {
        this.control({
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.person.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		var form = this.getDialog().down('form');

		var adresses = this.getAddressGrid().getStore().getRange();
		form.getRecord().addresses().removeAll();
		form.getRecord().addresses().add(adresses);
		
		var contacts = this.getContactGrid().getStore().getRange();
		form.getRecord().contacts().removeAll();
		form.getRecord().contacts().add(contacts);
		
	},
	
	onGetDataSuccess:function(record){
		var me = this;
		var form = this.getDialog().down('form');
		
		this.getAddressGrid().getStore().add(record.addresses().getRange());
		this.getContactGrid().getStore().add(record.contacts().getRange());
		
		
	}
    
});