Ext.define('AboutUs.store.site.VideoStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.site.Video',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'site/video/view.action',
            create : 'site/video/save.action',
            update: 'site/video/update.action',
            destroy: 'site/video/delete.action'
    	}
    	config = Ext.apply(config);
    }
});