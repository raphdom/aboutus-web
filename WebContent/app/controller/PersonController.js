Ext.define('AboutUs.controller.PersonController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: [
    		 'PersonStore',
    		 'list.CivilStatusStore', 
    		 'list.CountryStore', 
    		 'list.MemberTypeStore',
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
        ref: 'personlist',
        selector: 'personList'
    },{
    	ref: 'persondialog',
    	selector: 'personDialog'
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
    	
    }
    
});