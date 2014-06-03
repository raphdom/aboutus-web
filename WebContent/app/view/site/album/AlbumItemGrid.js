Ext.define('AboutUs.view.site.album.AlbumItemGrid' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.albumitemgrid',
    
    id: 'album-images-view',
    autoScroll:true,
    title: 'Ficheiros',

    initComponent: function() {
            var me = this;
            var store = Ext.create('Ext.data.Store', {
						     model: 'AboutUs.model.site.ItemAlbum',
						     proxy: {
						         type: 'memory'
						     }
						 });
            Ext.applyIf(me, {
                    items: Ext.create('Ext.view.View', {
                        store: store,
                        tpl: [
                            '<tpl for=".">',
                                '<div class="thumb-wrap" id="{filename:stripTags}">',
                                    '<div class="{classThumb}">',
                                    	'<img src="{id:formatThumbUrl(1,values.fileType)}" title="{filename:htmlEncode}">',
                                    '</div>',
                                    '<span class="x-editable">{filename:htmlEncode}</span>',
                                '</div>',
                            '</tpl>',
                            '<div class="x-clear"></div>'
                        ],
                        multiSelect: true,
                        trackOver: true,
                        overItemCls: 'x-item-over',
                        itemSelector: 'div.thumb-wrap',
                        emptyText: 'Sem ficheiros'
                    }),
                    tbar:[{
			                text: 'Adicionar',
			                icon:'resources/images/add.png',
			                action:'add',
			                handler:function(button){
					        	AboutUs.app.getController('CloudController').openImagePicker();
					        	var imagePicker = AboutUs.app.getController('CloudController').getImagePicker();
					        	imagePicker.addListener({
					        		recordSelected : function(imagePicker, recordsSelected){
					        			
					        			Ext.Array.forEach(recordsSelected, function(record, index, allItems) {
					        				var item = Ext.create('AboutUs.model.site.ItemAlbum');
					        				item.set('id',record.get('id'));
					        				store.add(item);
					        			});
					        			
					        			imagePicker.close();
					        		}
					        	})
					        },
					        scope:this
			        },{
			                text: 'Eliminar',
			                icon:'resources/images/delete.png',
			                action:'delete'
			        }]
            });
            me.callParent(arguments);
    }
    
});