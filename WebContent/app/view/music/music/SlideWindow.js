Ext.define('AboutUs.view.music.music.SlideWindow', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.slidewindow',
    
    title: 'Slide',
    
    modal:true,
    
    icon:'resources/images/projection.png',
    
    width:680,
    height:400,
    
    layout:'fit',
    
    buttons:[{
    	text:'Play',
    	action:'play'
    }],
    
    initComponent: function() {
    	var me = this;
    	
    	LyricModel = Ext.define('LyricModel', {
			extend: 'Ext.data.Model',
			fields: [
			   {name: 'phrase'}
			]
		});
	
	    store = Ext.create('Ext.data.Store', {
	        model: 'LyricModel',
	        proxy: {
	            type: 'memory'
	        }
	    });
	    
	    //store.load();
	    
	    view = Ext.create('Ext.view.View', {
	    	cls: 'slideView',
	    	store:store,
		    tpl: [
		        '<tpl for=".">',
		            '<div class="slideWrap">',
		            	'<div class="slide">',
		            		'<span class="phrase">{phrase}</span>',
		            	'</div>',
		            '</div>',
		        '</tpl>',
		        '<div class="x-clear"></div>'
		    ],
		    overItemCls: 'x-item-over',
		    itemSelector: 'div.slideWrap',
		    autoScroll: true
		   
	    })
    	
	    
        Ext.apply(me, {
        	items:[view]
        })
    	this.callParent(arguments);
    }
    
});