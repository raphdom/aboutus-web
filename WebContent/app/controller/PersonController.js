Ext.define('AboutUs.controller.PersonController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: [
    		 'PersonStore',
    		 'list.CivilStatusStore', 
    		 'list.CountryStore', 
    		 'list.MemberTypeStore',
    		 'list.ContactTypeStore',
    		 'AddressStore',
    		 'ContactStore'
    		 ],

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
    	ref: 'personDialog',
    	selector: 'persondialog'
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
		var form = this.getPersonDialog().down('form');

		var adresses = this.getAddressGrid().getSelectionModel().getSelection();
		form.getRecord().addresses().add(adresses);
		
		var contacts = this.getContactGrid().getSelectionModel().getSelection();
		form.getRecord().contacts().add(contacts);
		
	}
    
});