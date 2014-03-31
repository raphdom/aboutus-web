Ext.define('AboutUs.view.cloud.TreeCloudPanel' ,{
    extend: 'Ext.tree.Panel',
    alias : 'widget.treecloudpanel',
    
    title:'Pastas',
    region:'west',
    width: 200,
    collapsible: true,
    border:true,
    store:'FolderStore',
    cls: 'folderTree',
    useArrows: true,
    //rootVisible: false,
    root: {
    	id: "0",
        text: "Disco",
        expanded: true,
        icon:"resources/images/harddisk.png"
    },
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