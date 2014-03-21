Ext.define('AboutUs.view.cloud.TileGridThumbs' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.tilegridthumbs',
    
        id: 'images-view',
    
        initComponent: function() {
                var me = this;
                var store = AboutUs.app.getStore('CloudStore');
                Ext.applyIf(me, {
                        items: Ext.create('Ext.view.View', {
                            store: store,
                            autoScroll:true,
                            tpl: [
                                '<tpl for=".">',
                                    '<div class="thumb-wrap" id="{filename:stripTags}">',
                                        '<div class="{classThumb}">',
                                        	'<img src="{url1}" title="{filename:htmlEncode}">',
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