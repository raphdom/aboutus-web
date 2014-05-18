Ext.define('AboutUs.store.site.CategoryComboStore', {
    extend: 'Ext.data.TreeStore',
    
    model:'AboutUs.model.site.Category',
    defaultRootId:0,
    defaultRootText:'Raiz',
	proxy: {
    	type: 'ajax',
     	url: 'site/category/view.action',
     	reader: {
        	type: 'json'
     	}
 	}
     	
});