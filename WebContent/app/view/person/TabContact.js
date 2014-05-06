Ext.define('AboutUs.view.person.TabContact', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.persontabcontact',
    
    title:'Contatos',
    
    closable:false,
    
    height: 200,
    
    layout:'fit',
    
    initComponent: function() {
    	
    	var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
	        clicksToMoveEditor: 1,
	        autoCancel: false
	    });
	    
	    var contactStore = Ext.create('Ext.data.Store', {
		    model: 'AboutUs.model.Contact',
		    proxy: {
		        type: 'memory'
		    }
		});
	    
	    Ext.applyIf(this, {
        	items:[{
		    	xtype:'grid',
		    	store:contactStore,
		    	columns: [
		        	{ 
		        		text: 'Tipo',  
		        		dataIndex: 'contactTypeValue',
		        		renderer: function(value, metaData, record, rowIndex, colIndex, store) {
							var idx = this.columns[colIndex].field.store.find('value', value);
							return idx !== -1 ? this.columns[colIndex].field.store.getAt(idx).get('text') : ''; 
						},
		        		editor:{
		        			xtype:'listcombo',
            				url:'list/contactType.action',
            				editable:false
		        		},
		        		flex:1
		        	},
		        	{ 
		        		text: 'Valor', 
		        		dataIndex: 'value',
		        		editor:{},
		        		flex:1
		        	}
		    	],
		    	tbar: [{
		            text: 'Adicionar',
		            handler : function() {
		                rowEditing.cancelEdit();
		
		                // Create a model instance
		                var r = Ext.create('AboutUs.model.Contact');
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