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
            name:'baptized',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [{
	                    boxLabel  : 'Sim',
	                    name      : 'baptized',
	                    inputValue: 'true',
	                    id        : 'baptizedYes'
	                }, {
	                    boxLabel  : 'Não',
	                    name      : 'baptized',
	                    inputValue: 'false',
	                    id        : 'baptizedNo',
	                    checked   :	true
	            	}]
    	},{
			xtype:'datefield',
			fieldLabel: 'Data de Batismo',
            name: 'baptismdate'
    	},{
    		xtype      : 'fieldcontainer',
            fieldLabel : 'Consolidado',
            defaultType: 'radiofield',
            name:'consolidated',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [{
	                    boxLabel  : 'Sim',
	                    name      : 'consolidated',
	                    inputValue: 'true',
	                    id        : 'consolidatedYes'
	                }, {
	                    boxLabel  : 'Não',
	                    name      : 'consolidated',
	                    inputValue: 'false',
	                    id        : 'consolidatedNo',
	                    checked   :	true
	            	}]
    	},{
			xtype:'datefield',
			fieldLabel: 'Data de Chegada',
            name: 'arrivalChurchDate'
        },{
			fieldLabel: 'Igreja Anterior',
            name: 'precedingChurch'
    	}]
    }]
    
});