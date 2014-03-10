Ext.define('AboutUs.store.FolderComboStore', {
    extend: 'Ext.data.TreeStore',
    
    	proxy: {
         type: 'ajax',
         url: 'folder/view.action',
         reader: {
             type: 'json'
         }
     	}
     	
});