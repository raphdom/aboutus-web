Ext.define('AboutUs.view.component.criteria.NumberCriterion', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.numbercriterion',
    criteriaType:'number',
    hideTrigger:true,
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});