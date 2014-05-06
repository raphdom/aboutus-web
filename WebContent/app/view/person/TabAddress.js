Ext.define('AboutUs.view.person.TabAddress', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.persontabaddress',
    
    title:'Moradas',
    
    closable:false,
    
    height: 200,
    
    layout:'fit',
    
    initComponent: function() {
    	
    	var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
	        clicksToMoveEditor: 1,
	        autoCancel: false
	    });
	    
	    var addressStore = Ext.create('Ext.data.Store', {
		    model: 'AboutUs.model.Address',
		    proxy: {
		        type: 'memory'
		    }
		});
	    
	    Ext.applyIf(this, {
        	items:[{
		    	xtype:'grid',
		    	store:addressStore,
		    	columns: [
		        	{ text: 'Morada',  dataIndex: 'address',editor:{},flex:1},
		        	{ text: 'Localidade', dataIndex: 'state',editor:{},flex:1},
		        	{ text: 'País', dataIndex: 'country',editor:{},flex:1},
		        	{ text: 'Código Postal', dataIndex: 'postcode',editor:{},flex:1}
		    	],
		    	tbar: [{
		            text: 'Adicionar',
		            handler : function() {
		                rowEditing.cancelEdit();
		
		                // Create a model instance
		                var r = Ext.create('AboutUs.model.Address');
		                arguments[0].up('grid').getStore().insert(0, r);
		                rowEditing.startEdit(0, 0);
		            }
		        },{
		            text: 'Remover',
		            handler: function() {
		                var sm = arguments[0].up('grid').getSelectionModel();
		                rowEditing.cancelEdit();
		                arguments[0].up('grid').getStore().remove(sm.getSelection());
		                if (arguments[0].up('grid').getStore().getCount() > 0) {
		                    sm.select(0);
		                }
		            }
		        }],
		    	plugins: [rowEditing]
		    }]
        });
    	
		this.callParent(arguments);
	}
    
    
});