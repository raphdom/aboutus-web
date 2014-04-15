Ext.define('AboutUs.view.component.PersonCombo', {
    extend: 'Ext.form.field.ComboBox',
    
    alias: 'widget.personcombo',
    
    displayField:'name',
    valueField:'id',
	editable:false,
	
    initComponent: function() {
    	var me = this;
    	var store = Ext.create('Ext.data.Store', {
		    model: 'AboutUs.model.Person',
		    autoLoad:true,
		    proxy: {
		        type: 'ajax',
		        api: {
		        	read : 'person/view.action'
		        },
		        reader: {
		            type: 'json',
		            root: 'data',
		            successProperty: 'success'
		        }
		    }
		});
    	Ext.apply(me, {
        	store:store
        })
        this.callParent(arguments);
    }
    
});