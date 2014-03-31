Ext.define('AboutUs.store.FolderStore', {
    extend: 'Ext.data.TreeStore',
    	model:'AboutUs.model.Folder',
    	autoLoad:true,
    	proxy: {
         type: 'ajax',
         url: 'folder/view.action',
         reader: {
             type: 'json'
         }
     	}
     	
});