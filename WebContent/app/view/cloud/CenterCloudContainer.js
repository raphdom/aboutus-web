Ext.define('AboutUs.view.cloud.CenterCloudContainer' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.centercloudcontainer',
    requires:['Ext.ux.container.SwitchButtonSegment'],
    
    layout:'fit',
    region:'center',
    border:true,
    title:'Ficheiros',
    
    items: [{
                xtype: 'tilegridthumbs'
            },{
                xtype: 'tilegridicons'
            },{
            	xtype: 'tilegriddetails'
            },{
				xtype: 'FileDownloader'
            }],
            
    tbar:[{
                text: 'Upload',
                icon:'resources/images/download-cloud.png',
                action:'add',
                disabled:true
        },{
                 icon:'resources/images/controlPlay.png',
                action:'slideshow'
        },'->',{
                xtype:'combo',
                fieldLabel: 'Ordenar',
                queryMode: 'local',
                displayField: 'value',
                valueField: 'key',
                editable:false,
                store: Ext.create('Ext.data.Store', {
                        fields: ['key', 'value'],
                        data : [
                                {"key":"filename", "value":"Nome"},
                                {"key":"filetype", "value":"Tipo"},
                                {"key":"filesize", "value":"Tamanho"},
                                {"key":"createdDate", "value":"Data Criação"}
                                ]
                        })
        },{
                xtype:'switchbuttonsegment',
                activeItem: 2,
                items:[{
                                iconCls: 'icon-default',
                                action:'gridDetails'
                        },{
                                iconCls: 'icon-icons',
                                action:'gridIcons'
                        },{
                                iconCls: 'icon-thumb',
                                action:'gridThumbs'
                        /*},{
                                iconCls: 'icon-thumbLarge',
                                action:'gridThumbsLarge'
                        */
                        }]
        }]
    
});