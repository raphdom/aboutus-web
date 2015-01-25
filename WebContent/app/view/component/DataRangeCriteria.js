Ext.define('AboutUs.view.component.DataRangeCriteria', {
	extend: 'Ext.ux.daterange.field.DateRangeSelection',
	alias: 'widget.datarangecriteria',
	
	startDateText: 'Data início',
	endDateText: 'Data fim',
    selectStartDateText: 'Selecione uma data de início',
    selectEndDateText: 'Selecione uma data de fim',
    
    format : "d/m/Y",
	
    initComponent: function() {
    	this.callParent(arguments);
    }
    
});