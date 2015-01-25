Ext.define('AboutUs.store.site.AlbumStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.site.Album',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'site/album/view.action',
            create : 'site/album/save.action',
            update: 'site/album/update.action',
            destroy: 'site/album/delete.action'
    	}
    	config = Ext.apply(config);
    }
});