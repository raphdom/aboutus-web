Ext.define('AboutUs.view.component.criteria.CountryCriterion', {
    extend: 'AboutUs.view.component.criteria.AbstractBoxSelectCriterion',
    alias: 'widget.countrycriterion',
    
    requires: ['AboutUs.view.component.criteria.AbstractBoxSelectCriterion'],
    
    url:'list/country.action',
	editable:true,
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});