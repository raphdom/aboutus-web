Ext.define('AboutUs.store.music.PlaylistStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.music.Playlist',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'music/playlist/view.action',
            create : 'music/playlist/save.action',
            update: 'music/playlist/update.action',
            destroy: 'music/playlist/delete.action'
    	}
    	config = Ext.apply(config);
    }
});