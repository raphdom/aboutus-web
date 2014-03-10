Ext.define('AboutUs.view.church.TabData', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.churchtabdata',
    
    title:'Dados',
    
    closable:false,
    
    items:[{
    	xtype: 'form',
        layout: 'form',
        url: 'church/create.action',
        bodyPadding: 10,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaultType: 'textfield',
        items: [
       	{
			fieldLabel: 'id',
			name : 'id',
			hidden:true
		},{
            fieldLabel: 'Nome',
            name: 'name',
            allowBlank: false
        }]
    }]
    
    
});