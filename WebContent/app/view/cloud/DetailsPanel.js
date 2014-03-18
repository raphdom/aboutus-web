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
                    (!Ext.isIE6? '<img src="{url2}" />' : 
                    '<div style="width:74px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'icons/{thumb}\')"></div>'),
                '<div class="details-info">',
                    '<b>Nome do Ficheiro:</b>',
                    '<span>{filename}</span>',
                    '<b>Tipo:</b>',
                    '<span>{filetype}</span>',
                    '<b>Tamanho:</b>',
                    '<span>{filesize:fileSize}</span>',
                    '<b>Criado em:</b>',
                    '<span>{createdDate:date("d-m-Y G:i:s")}</span>',
                    '<b>Tí­tulo:</b>',
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