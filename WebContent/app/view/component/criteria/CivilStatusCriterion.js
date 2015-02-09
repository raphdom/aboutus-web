Ext.define('AboutUs.view.component.criteria.CivilStatusCriterion', {
    extend: 'AboutUs.view.component.criteria.AbstractBoxSelectCriterion',
    alias: 'widget.civilstatuscriterion',
    
    requires: ['AboutUs.view.component.criteria.AbstractBoxSelectCriterion'],
    
    url:'list/civilStatus.action',
	editable:true,
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});