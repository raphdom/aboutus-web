Ext.define('AboutUs.view.common.Form', {
    extend: 'Ext.form.Panel',
    
    alias: 'widget.commonform',
    
    requires:['Ext.ux.form.plugin.ValidationMessages'],
    
    fieldDefaults: {
        labelWidth: 110,
        labelAlign: 'left',
        msgTarget: 'side',
        invalidCls: ''
    },
    
    plugins:['validationMessages'],
    
    buttons: [{
        	text:'Cancelar',
        	action:'cancel'
    	}, {
            formBind: true,
            disabled: true,
            text: 'Guardar',
            action:'save'
	}]
    
});