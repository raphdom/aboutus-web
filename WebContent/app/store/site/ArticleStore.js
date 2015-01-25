Ext.define('AboutUs.store.site.ArticleStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.site.Article',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'site/article/view.action',
            create : 'site/article/save.action',
            update: 'site/article/update.action',
            destroy: 'site/article/delete.action'
    	}
    	config = Ext.apply(config);
    }
});