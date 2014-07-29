Ext.define('AboutUs.view.music.music.SlideWindow', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.slidewindow',
    
    title: 'Slide',
    
    modal:true,
    
    icon:'resources/images/projection.png',
    
    width:730,
    height:430,
    
    layout:'fit',
    
    buttons:[{
    	text:'Play',
    	action:'play'
    }],
    
    initComponent: function() {
    	var me = this;
    	
	    store = Ext.create('Ext.data.ArrayStore', {
	       fields: ['phrase']
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
    },
    
    addMusic : function(title, liryc){
    	
        var splited = liryc.split("\n");
        var data = new Array();
        var obj = new Object();
        obj.phrase = title.toUpperCase();
        data.push(obj);
        obj = new Object();
        obj.phrase = "";
        for (var i = 0; i < splited.length; i++) {
            if (splited[i].trim() == ""){
                data.push(obj);
                obj = new Object();
                obj.phrase = "";
            }else{
                if (obj.phrase != ""){
                    obj.phrase = obj.phrase + "<br/>" + splited[i].toUpperCase();
                }else{
                    obj.phrase = splited[i].toUpperCase();
                }
            }
        }
        data.push(obj);
        data.push([]);

        this.down('dataview').getStore().loadData(data,true);
    	
    }
    
});