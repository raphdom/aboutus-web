Ext.define('AboutUs.view.cloud.TileGridIcons' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.tilegridicons',
    
        id: 'icons-view',
    
        initComponent: function() {
                var me = this;
                var store = AboutUs.app.getStore('CloudStore');
                Ext.applyIf(me, {
                        items: Ext.create('Ext.view.View', {
                            store: store,
                            tpl: [
                                '<tpl for=".">',
                                    '<div class="icons-wrap" id="{name:stripTags}">',
                                        '<div class="{classThumb}"><img src="{id:formatThumbUrl(1,this.filetype)}" title="{name:htmlEncode}"></div>',
                                        '<div class="iconsInfo">',
                                                '<span class="infoName">{filename:htmlEncode}</span>',
                                                '<span class="infoType">{filetype:htmlEncode}</span>',
                                                '<span class="infoSize">{filesize:fileSize}</span>',
                                        '</div>',
                                    '</div>',
                                '</tpl>',
                                '<div class="x-clear"></div>'
                            ],
                            multiSelect: true,
                            trackOver: true,
                            overItemCls: 'x-item-over',
                            itemSelector: 'div.icons-wrap',
                            emptyText: 'No images to display'
                        })
                });
                me.callParent(arguments);
        }
    
});