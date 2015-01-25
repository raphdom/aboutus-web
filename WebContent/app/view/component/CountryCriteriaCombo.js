Ext.define('AboutUs.view.component.CountryCriteriaCombo', {
    extend: 'AboutUs.view.component.ListCombo',
    
    alias: 'widget.countrycriteriacombo',
    
    url:'list/country.action',
	editable:false,
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});