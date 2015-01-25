Ext.define('AboutUs.store.site.CategoryStore', {
	extend: 'Ext.data.TreeStore',
	model:'AboutUs.model.site.Category',
    defaultRootId:0,
    defaultRootText:'Raiz',
	proxy: {
    	type: 'ajax',
    	api: {
        	read : 'site/category/view.action',
            destroy: 'site/category/delete.action'
        },
     	reader: {
        	type: 'json'
     	}
 	}
});