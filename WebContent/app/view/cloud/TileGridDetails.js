Ext.define('AboutUs.view.cloud.TileGridDetails' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.tilegriddetails',
    
    multiSelect: true,
    store:'CloudStore',
    
    columns: [{
    		dataIndex: 'id',
    		width: 35,
		    renderer: function(value, metadata, record){
		        return '<img src="' + Ext.util.Format.formatThumbUrl(value,-1,record.get('fileType')) + '" />';
		    }
    	},{
            text: 'Nome',
            id: 'name',
            flex: 1,
            dataIndex: 'filename'
        }, {
            text: 'Tipo',
            id: 'type',
            flex: 1,
            dataIndex: 'fileType'
        }, {
            text: 'Tamanho',
            id: 'size',
            flex: 1,
            dataIndex: 'filesize',
            renderer: 'fileSize'
        }, {
            text: 'Criado',
            flex: 1,
            dataIndex: 'createdDate',
            xtype:'datecolumn', 
    		format:'d-m-Y H:i'
        }]
    
});