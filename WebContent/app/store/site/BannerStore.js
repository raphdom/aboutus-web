Ext.define('AboutUs.store.site.BannerStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.site.Banner',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'site/banner/view.action',
            create : 'site/banner/save.action',
            update: 'site/banner/update.action',
            destroy: 'site/banner/delete.action'
    	}
    	config = Ext.apply(config);
    }
});