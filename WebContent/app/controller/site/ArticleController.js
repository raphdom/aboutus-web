Ext.define('AboutUs.controller.site.ArticleController', {
    extend: 'AboutUs.controller.CommonListController',
    
    stores: ['site.ArticleStore'],

    models: ['site.Article'],

    views: ['site.article.List',
    		'site.article.Dialog'],
    
    refs: [{
        ref: 'list',
        selector: 'sitearticlelist'
    },{
    	ref: 'dialog',
    	selector: 'sitearticledialog',
    	autoCreate:true,
        xtype:'sitearticledialog'
    }],
    
    init: function() {
        this.control({
     		
        });
    },
    
    processActionMenu: function(type){
    	
    	var centerContainer = this.getController('MainController').getMainContainer().down('container[itemId=centerContainer]');
    	
    	var list = Ext.create('AboutUs.view.site.article.List');
    	centerContainer.add(list);
    	
    	centerContainer.setLoading(false);
    	
    },
    
    onBeforeSaveData: function(){
		
	},
	
	onGetDataSuccess:function(record){
		
	}
    
});