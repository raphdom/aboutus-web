Ext.define('AboutUs.store.FolderStore', {
    extend: 'Ext.data.TreeStore',
    	model:'AboutUs.model.Folder',
    	proxy: {
         type: 'ajax',
         url: 'folder/view.action',
         reader: {
             type: 'json'
         }
     	}
     	
});