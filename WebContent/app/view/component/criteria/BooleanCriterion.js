Ext.define('AboutUs.view.component.criteria.BooleanCriterion', {
    extend: 'Ext.form.field.Checkbox',
    alias: 'widget.booleancriterion',
    criteriaType:'boolean',
    inputValue:true,
    value:false,
    uncheckedValue:false,
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});