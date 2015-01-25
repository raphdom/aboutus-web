Ext.define('AboutUs.store.music.MusicStore', {
    extend: 'AboutUs.store.AbstractStore',
    model: 'AboutUs.model.music.Music',
    proxy: Ext.create('AboutUs.store.AbstractAjaxProxy'),
    
    constructor : function(config) {
    	this.callParent(arguments);
    	this.proxy.api = {
    		read : 'music/music/view.action',
            create : 'music/music/save.action',
            update: 'music/music/update.action',
            destroy: 'music/music/delete.action'
    	}
    	config = Ext.apply(config);
    }
});