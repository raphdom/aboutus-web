Ext.define('AboutUs.view.calendar.TabEventDescription', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.tabeventdescription',
    
    title:'Description',
    
    header:false,
    
    layout:{
    	type:'hbox',
    	align:'stretchmax'
    },
   
   	items:[{
    	xtype     : 'htmleditor',
    	emptyText : 'Digita aqui a descrição detalhada do evento',
        name      : 'description'
    }]
    
    
});