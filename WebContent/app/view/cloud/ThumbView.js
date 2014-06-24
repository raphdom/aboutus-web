Ext.define('AboutUs.view.cloud.ThumbView' ,{
    extend: 'Ext.view.View',
    alias : 'widget.thumbview',
    
    requires:['Ext.ux.dataview.Draggable'],
    
    mixins: {
        draggable: 'Ext.ux.dataview.Draggable'
    },
	store: 'CloudStore',
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap" id="{filename:stripTags}">',
                '<div class="{classThumb}">',
                	'<img src="{id:formatThumbUrl(2,values.fileType)}" title="{filename:htmlEncode}">',
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
    emptyText: 'Pasta vazia',

    initComponent: function() {
            var me = this;
            
            this.mixins.draggable.init(this, {
	            ddConfig: {
	                ddGroup: 'organizerDD'
	            },
	            ghostTpl: [
	                '<tpl for=".">',
	                    '<img src="../view/chooser/icons/{thumb}" />',
	                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
	                '</tpl>',
	                '<div class="count">',
	                    '{[values.length]} images selected',
	                '<div>'
	            ]
	        });
            
            me.callParent(arguments);
    }
    
});