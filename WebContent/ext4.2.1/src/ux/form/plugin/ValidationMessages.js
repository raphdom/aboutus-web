Ext.define('Ext.ux.form.plugin.ValidationMessages', {
	extend: 'Ext.AbstractPlugin',
	
	alias: 'plugin.validationMessages',
    
    alternateClassName: 'Ext.ux.ValidationMessages',
    
    constructor: function() {
        this.callParent();
    },
    
    init: function(formPanel) {
    	this.callParent();
    	var me = this;
    	
    	this.messageComponent = Ext.create('Ext.Component',{
            itemId: 'formErrorState',
            invalidCls: Ext.baseCSSPrefix + 'form-invalid-icon',
            validCls: Ext.baseCSSPrefix + 'icon-valid-message',
            baseCls: 'form-error-state',
            flex: 1,
            validText: 'Formulário completo',
            invalidText: 'Formulário incompleto',
            tipTpl: Ext.create('Ext.XTemplate', '<ul class="' + Ext.plainListCls + '"><tpl for="."><li><span class="field-name">{name}</span>: <span class="error">{error}</span></li></tpl></ul>'),

            getTip: function() {
                var tip = this.tip;
                if (!tip) {
                    tip = this.tip = Ext.widget('tooltip', {
                        target: this.el,
                        title: 'Detalhes do erro:',
                        minWidth: 200,
                        autoHide: true,
                        anchor: 'bottom',
                        mouseOffset: [-11, -2],
                        closable: false,
                        constrainPosition: false,
                        cls: 'errors-tip'
                    });
                }
                return tip;
            },

            setErrors: function(errors) {
                var me = this,
                    tip = me.getTip();

                errors = Ext.Array.from(errors);

                // Update CSS class and tooltip content
                if (errors.length) {
                    me.addCls(me.invalidCls);
                    me.removeCls(me.validCls);
                    me.update(me.invalidText);
                    tip.setDisabled(false);
                    tip.update(me.tipTpl.apply(errors));
                } else {
                    me.addCls(me.validCls);
                    me.removeCls(me.invalidCls);
                    me.update(me.validText);
                    tip.setDisabled(true);
                    tip.hide();
                }
            }
    	});
    	
    	formPanel.down('toolbar').insert(0,this.messageComponent);
    	formPanel.on({
    		fieldvaliditychange: this.updateErrorState,
        	fielderrorchange: this.updateErrorState,
        	afterrender: this.updateErrorState
    	})
    },
    
    updateErrorState: function() {
        var me = this,
        errorCmp, fields, errors;

        errorCmp = me.down('component[itemId=formErrorState]');
        fields = me.getForm().getFields();
        errors = [];
        fields.each(function(field) {
            Ext.Array.forEach(field.getErrors(), function(error) {
                errors.push({name: field.getFieldLabel(), error: error});
            });
        });
        errorCmp.setErrors(errors);
        me.hasBeenDirty = true;
    }
	
});