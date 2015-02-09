Ext.define('AboutUs.view.component.criteria.TextCriterion', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.textcriterion',
    criteriaType:'text',
    
    initComponent: function() {
        this.callParent(arguments);
    }
    
});