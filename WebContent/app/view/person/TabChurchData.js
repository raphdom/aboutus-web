Ext.define('AboutUs.view.person.TabChurchData', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.persontabchurchdata',
    
    title:'Dados Igreja',
    
    closable:false,
    
    items:[{
        layout: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 100
        },
        defaultType: 'textfield',
        items: [{
       		xtype      : 'fieldcontainer',
            fieldLabel : 'Batizado',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [{
	                    boxLabel  : 'Sim',
	                    name      : 'baptized',
	                    inputValue: '1',
	                    id        : 'baptized1'
	                }, {
	                    boxLabel  : 'Não',
	                    name      : 'baptized',
	                    inputValue: '0',
	                    id        : 'baptized2'
	            	}]
    	},{
			xtype:'datefield',
			fieldLabel: 'Data de Batismo',
            name: 'baptismDate',
            allowBlank: false
    	},{
    		xtype      : 'fieldcontainer',
            fieldLabel : 'Consolidado',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [{
	                    boxLabel  : 'Sim',
	                    name      : 'consolidated',
	                    inputValue: '1',
	                    id        : 'consolidated1'
	                }, {
	                    boxLabel  : 'Não',
	                    name      : 'consolidated',
	                    inputValue: '0',
	                    id        : 'consolidated2'
	            	}]
    	},{
			xtype:'datefield',
			fieldLabel: 'Data de Chegada',
            name: 'arrivalDate',
            allowBlank: false
        },{
			fieldLabel: 'Igreja Anterior',
            name: 'previousChurch',
            allowBlank: false
    	}]
    }]
    
});