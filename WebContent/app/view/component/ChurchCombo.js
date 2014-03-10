Ext.define('AboutUs.view.component.ChurchCombo', {
    extend: 'Ext.form.field.ComboBox',
    
    alias: 'widget.churchcombo',
    
    store:Ext.create('Ext.data.Store', {
	    model: 'AboutUs.model.Church',
	    loaded:false,
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
	}),
    displayField:'name',
    valueField:'id'
    
});