Ext.define('AboutUs.view.component.criteria.ChurchComboCriterion', {
    extend: 'Ext.ux.form.field.BoxSelect',
    alias: 'widget.churchcombocriterion',
    criteriaType:'multivalue',
    
    displayField:'name',
    valueField:'id',
    
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