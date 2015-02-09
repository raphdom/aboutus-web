Ext.define('AboutUs.view.component.criteria.MemberTypeCriterion', {
    extend: 'AboutUs.view.component.criteria.AbstractBoxSelectCriterion',
    alias: 'widget.membertypecriterion',
    
    requires: ['AboutUs.view.component.criteria.AbstractBoxSelectCriterion'],
    
    url:'list/memberType.action',
	editable:true,
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});