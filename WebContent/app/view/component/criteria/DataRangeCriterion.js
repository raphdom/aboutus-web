Ext.define('AboutUs.view.component.criteria.DataRangeCriterion', {
	extend: 'Ext.ux.daterange.field.DateRangeSelection',
	alias: 'widget.daterangecriterion',
	criteriaType:'daterange',
	
	startDateText: 'Data início',
	endDateText: 'Data fim',
    selectStartDateText: 'Selecione uma data de início',
    selectEndDateText: 'Selecione uma data de fim',
    
    format : "d/m/Y",
	
    initComponent: function() {
    	this.callParent(arguments);
    }
    
});