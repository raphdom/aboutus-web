Ext.define('AboutUs.view.cloud.DetailsPanel' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.detailspanel',
    
    requires: [
    	'AboutUs.util.FileDownloader'
	],
    
    title:'Detalhes',
    region: 'east',
    width:200,
    border:true,
    id: 'img-detail-panel',
    
    tpl: [
        '<div class="details">',
            '<tpl for=".">',
            	'<img src="{id:formatThumbUrl(2,values.filetype)}" />', 
                '<div class="details-info">',
                    '<b>Nome do Ficheiro:</b>',
                    '<span>{filename}</span>',
                    '<b>Tipo:</b>',
                    '<span>{filetype}</span>',
                    '<b>Tamanho:</b>',
                    '<span>{filesize:fileSize}</span>',
                    '<b>Criado em:</b>',
                    '<span>{createdDate:date("d-m-Y G:i:s")}</span>',
                    '<b>Título:</b>',
                    '<span>{title}</span>',
                    '<b>Palavras-chave:</b>',
                    '<span>{keywords}</span>',
                '</div>',
            '</tpl>',
        '</div>'
    ],
    
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            hidden:true,
            items:[{
                xtype:'buttonsegment',
                items:[{
                        icon:'resources/images/magnifier.png',
                        action:'view'
                       },{
                        icon:'resources/images/download.png',
                        action:'down'
                       }]
                },'->',{
	                xtype:'buttonsegment',
	                items:[{
	                        icon:'resources/images/edit.png',
	                        action:'edit'
	                },{
	                        icon:'resources/images/delete.png',
	                        action:'del'
	                }]
             }]
    }],
   
    loadRecord: function(image) {
        this.tpl.overwrite(this.body, image.data);
        this.down('toolbar').show();
    },
    
    clear: function(){
        this.body.update('');
        this.down('toolbar').hide();
    }
    
});