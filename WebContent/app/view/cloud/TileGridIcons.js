Ext.define('AboutUs.view.cloud.TileGridIcons' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.tilegridicons',
    
        id: 'icons-view',
        autoScroll:true,
    
        initComponent: function() {
                var me = this;
                var store = AboutUs.app.getStore('CloudStore');
                Ext.applyIf(me, {
                        items: Ext.create('Ext.view.View', {
                            store: store,
                            tpl: [
                                '<tpl for=".">',
                                    '<div class="icons-wrap" id="{name:stripTags}">',
                                        '<div class="{classThumb}">',
                                        	'<img src="{id:formatThumbUrl(1,values.fileType)}" onerror="if (this.src != \'{id:getDefaultIcon(1,values.fileType)}\') this.src = \'{id:getDefaultIcon(1,values.fileType)}\';" title="{filename:htmlEncode}">',
                                        '</div>',
                                        '<div class="iconsInfo">',
                                                '<span class="infoName">{filename:htmlEncode}</span>',
                                                '<span class="infoType">{fileType:htmlEncode}</span>',
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