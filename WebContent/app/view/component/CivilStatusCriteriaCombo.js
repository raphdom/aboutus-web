Ext.define('AboutUs.view.component.CivilStatusCriteriaCombo', {
    extend: 'AboutUs.view.component.ListCombo',
    
    alias: 'widget.civilstatuscriteriacombo',
    
    url:'list/civilStatus.action',
	editable:false,
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});