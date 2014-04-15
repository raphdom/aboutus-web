Ext.define('AboutUs.view.component.ChurchCombo', {
    extend: 'Ext.form.field.ComboBox',
    
    alias: 'widget.churchcombo',
    
    displayField:'name',
    valueField:'id',
    editable:false,
    
    initComponent: function() {
    	var me = this;
    	var store = Ext.create('Ext.data.Store', {
		    model: 'AboutUs.model.Church',
		    autoLoad:true,
		    proxy: {
		        type: 'ajax',
		        api: {
		        	read : 'church/view.action'
		        },
		        reader: {
		            type: 'json',
		            root: 'data',
		            successProperty: 'success'
		        }
		    }
		})
    	Ext.apply(me, {
        	store:store
        })
        this.callParent(arguments);
    }
    
});