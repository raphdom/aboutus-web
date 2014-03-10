Ext.define('AboutUs.view.menu.Menu', {
    extend: 'Ext.panel.Panel',
    xtype:'menu-list',
    
    initComponent: function(){
        Ext.apply(this, {
            items: this.createView()
        });
        this.addEvents(
                'itemSelect'
        );
        this.callParent(arguments);
    },
    
    createView: function(){
        var store= Ext.create('Ext.data.Store', {
                model: 'AboutUs.model.ItemMenu',
                data: this.menuItems               
            });
        store.filter('visible', true);
        
        this.view = Ext.create('widget.dataview', {
            autoScroll: true,
            store: store,
            selModel: {
                mode: 'SINGLE',
                listeners: {
                    scope: this,
                    selectionchange: this.onSelectionChange
                }
            },
            listeners: {
                scope: this,
                viewready: this.onViewReady
            },
            trackOver: true,
            cls: 'feed-list',
            itemSelector: '.feed-list-item',
            overItemCls: 'feed-list-item-hover',
            tpl: '<tpl for="."><div class="feed-list-item"><div class="image"><img src="{icon}"/></div><div class="title">{title}</div></div></tpl>'
        });
        
        return this.view;
    },
    
	onViewReady: function(){
    },
    
    onSelectionChange: function(){
    	var rec = this.view.getSelectionModel().getSelection()[0];
    	if(rec){
    		this.fireEvent('itemSelect', this, rec.get('title'), rec.get('type'), rec.get('controller'));
    	}
    },
    
    clearSelection: function(){
    	this.view.getSelectionModel().deselectAll();
    }
});