Ext.define('AboutUs.controller.ChurchController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['ChurchStore'],

    models: ['Church'],

    views: ['church.List',
    		'church.Dialog',
    		'church.TabPanel',
    		'church.TabData'],
    
    refs: [{
        ref: 'churchlist',
        selector: 'churchList'
    },{
    	ref: 'churchdialog',
    	selector: 'churchdialog'
    }],
    
    init: function() {
        this.control({
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.church.List');
    	centerContainer.add(list);
    	//list.getStore().clearFilter();
    	
    }
    
});