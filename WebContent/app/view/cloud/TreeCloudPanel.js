Ext.define('AboutUs.view.cloud.TreeCloudPanel' ,{
    extend: 'Ext.tree.Panel',
    alias : 'widget.treecloudpanel',
    
    title:'Pastas',
    region:'west',
    width: 200,
    collapsible: true,
    border:true,
    store:'FolderStore',
    useArrows: true,
    rootVisible: false,
    tbar:[{
            xtype:'buttonsegment',
            items:[{
                    icon:'resources/images/add.png',
                    action:'add'
            },{
                    icon:'resources/images/edit.png',
                    action:'edit'
            },{
                    icon:'resources/images/delete.png',
                    action:'del'
            }]
    }],
    
    getFolderPath:function(record){
    	if (record.get('path')=="/"){
    		return "/" + record.get('text');
    	}else{
    		return record.get('path') + "/" + record.get('text');	
    	}
    },
    
    getSelectedFolder: function(){
    	return this.getSelectionModel().getSelection()[0];	
    }
    
});