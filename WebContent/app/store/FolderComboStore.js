Ext.define('AboutUs.store.FolderComboStore', {
    extend: 'Ext.data.TreeStore',
    
    model:'AboutUs.model.Folder',
    	defaultRootId:0,
    	defaultRootText:'Disco',
    
    	proxy: {
         type: 'ajax',
         url: 'folder/view.action',
         reader: {
             type: 'json'
         }
     	}
     	
});