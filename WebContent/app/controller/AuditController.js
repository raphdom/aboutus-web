Ext.define('AboutUs.controller.AuditController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['AuditStore'],

    models: ['Audit'],

    views: ['home.ListAudit'],
    
    refs: [{
        ref: 'list',
        selector: 'auditlist'
    }],
    
    init: function() {
        this.control({
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	centerContainer.setLoading(true);
    	centerContainer.removeAll();
    	
    	var list = Ext.create('AboutUs.view.home.ListAudit');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    }
    
});