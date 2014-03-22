Ext.define('AboutUs.view.cloud.TileGridThumbs' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.tilegridthumbs',
    
        id: 'images-view',
        autoScroll:true,
    
        initComponent: function() {
                var me = this;
                var store = AboutUs.app.getStore('CloudStore');
                Ext.applyIf(me, {
                        items: Ext.create('Ext.view.View', {
                            store: store,
                            tpl: [
                                '<tpl for=".">',
                                    '<div class="thumb-wrap" id="{filename:stripTags}">',
                                        '<div class="{classThumb}">',
                                        	'<img src="{id:formatThumbUrl(1,values.filetype)}" title="{filename:htmlEncode}">',
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
                            emptyText: 'Pasta vazia'
                        })
                });
                me.callParent(arguments);
        }
    
});