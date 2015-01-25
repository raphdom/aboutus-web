Ext.define('AboutUs.view.component.ChurchCombo', {
    extend: 'Ext.form.field.ComboBox',
    
    alias: 'widget.churchcombo',
    
    displayField:'name',
    valueField:'id',
    editable:false,
    
    initComponent: function() {
    	var me = this;
    	var store = Ext.create('AboutUs.store.ChurchStore', {
		    autoLoad:true
		})
    	Ext.apply(me, {
        	store:store
        })
        this.callParent(arguments);
    }
    
});