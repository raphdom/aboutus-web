Ext.define('AboutUs.view.person.TabObservation', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.persontabobservation',
    
    title:'Observações',
    
    closable:false,
    
    height: 200,
    
    layout:'fit',
    
    items:[{
    	xtype     : 'textareafield',
    	emptyText : 'Digita aqui uma observação',
        name      : 'observation'
    }]
    
    
});