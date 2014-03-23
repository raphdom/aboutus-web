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
    
    tpl2:  new Ext.XTemplate(
        '<div class="details">',
            '<tpl for=".">',
            	'<img src="resources/images/mimetypes/128/default.png" />', 
                '<div class="details-info">',
                    '<b>Nome do Ficheiro:</b>',
                    '<span>{quantity} ficheiros selecionados</span>',
                    '<b>Tamanho:</b>',
                    '<span>{filesize:fileSize}</span>',
                '</div>',
            '</tpl>',
        '</div>'
    ),
    
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
                        action:'delete'
	                }]
             }]
    }],
   
    loadRecord: function(image) {
        this.tpl.overwrite(this.body, image.data);
        this.down('toolbar button[action=view]').show();
        this.down('toolbar button[action=down]').show();
        this.down('toolbar button[action=edit]').show();
        this.down('toolbar').show();
    },
    
    loadRecords: function(quantity,filesize){
    	var data = {
    		quantity:quantity,
    		filesize:filesize
    	}
    	this.tpl2.overwrite(this.body, data);
        
        this.down('toolbar').show();
        this.down('toolbar button[action=view]').hide();
        this.down('toolbar button[action=down]').hide();
        this.down('toolbar button[action=edit]').hide();
    },
    
    clear: function(){
        this.body.update('');
        this.down('toolbar').hide();
    }
    
});