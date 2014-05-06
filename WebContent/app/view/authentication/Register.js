Ext.define('AboutUs.view.authentication.Register', {
    extend: 'Ext.form.Panel',
    xtype: 'registerForm',
    
    url:'register.action',
    title: 'Registo',
    frame:true,
    width: 700,
    bodyPadding: 10,
    icon:'resources/images/church.png',
    
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 200
    },
    
    plugins:['validationMessages'],
    
    items: [{
    		xtype:'fieldset',
            title: 'Dados da Igreja',
            collapsible: false,
            defaultType: 'textfield',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items:[{
		        	allowBlank: false,
		            fieldLabel: 'Igreja',
		            name: 'churchName'
		        },
		        {
		        	allowBlank: false,
		            fieldLabel: 'Morada',
		            name: 'churchAddress'
		        },
		        {
		        	allowBlank: false,
		            fieldLabel: 'País',
		            xtype:'combo',
		            //store:'list.CountryStore',
		            valueField:'value',
		            forceSelection:true,
		            displayField:'text',
		            name: 'country',
		            queryMode:'local'
		        },{
		        	xtype: 'fieldcontainer',
		        	allowBlank: false,
		            fieldLabel: 'Nome do site',
		            layout:'hbox',
		        	items:[{
		        		xtype:'textfield',
		        		allowBlank: false,
		        		fieldLabel: 'Nome do site',
		        		hideLabel:true,
		        		name: 'siteAlias',
		        		enableKeyEvents:true,
		        		flex:1
		        	},{
		        		xtype: 'splitter'
		        	},{
		        		xtype:'displayfield',
		        		value:'http://www.aboutuschurch.com/',
		        		fieldStyle: {
				            'font-size': '10px',
				            'margin-top': '6px',
				            color:'#BBBBBB'
				        },
		        		flex:1
	        		},{
		        		xtype:'displayfield',
		        		id:'aliasNameEx',
		        		fieldStyle: {
				            color:'#157FCC'
				        },
		        		flex:1
		        	}]
		        },
		        {
		            fieldLabel: 'Quantos membro tem sua igreja?',
		            name: 'qtdMembers'
		        }]
    	},{
			xtype:'fieldset',
	        title: 'Dados de Acesso',
	        collapsible: false,
	        defaultType: 'textfield',
	        layout: 'anchor',
	        defaults: {
	            anchor: '100%'
	        },
	        items:[{
		            allowBlank: false,
		            fieldLabel: 'Email',
		            name: 'email',
		            emptyText: 'Email',
		            vtype:'email'
		        },
		        {
		            allowBlank: false,
		            fieldLabel: 'Palavra-chave',
		            name: 'password',
		            emptyText: 'Palavra-chave',
		            inputType: 'password'
		        },{
		        	allowBlank: false,
		            fieldLabel: 'Confirmar palavra-chave',
		            name: 'passwordConfirm',
		            inputType: 'password',
					validator: function(value) {
		                var password1 = this.previousSibling('[name=password]');
		                return (value === password1.getValue()) ? true : 'Palavra-chave não corresponde.'
		            }		            
		        },{
		        	allowBlank: false,
		            fieldLabel: 'Nome completo',
		            name: 'nameResp'
		        }]
	},{
	    xtype: 'checkboxfield',
	    name: 'acceptTerms',
	    fieldLabel: 'Termos e Condições',
	    hideLabel: true,
	    margin: '15 0 0 0',
	    boxLabel: 'Eu li e aceito os <a href="#" class="terms">Termos de utilização</a>.',
        getErrors: function() {
            return this.getValue() ? [] : ['Você deve aceitar os termos de utilização']
        },
        listeners: {
                click: {
                    element: 'boxLabelEl',
                    fn: function(e) {
                        var target = e.getTarget('.terms');
                        if (target) {
                        	Ext.create('AboutUs.view.authentication.TermsOfUseDialog').show();
                        }
                        e.preventDefault();
                    }
                }
        }
	}],
    
    buttons: [{ 
        	text:'Enviar Registo',
        	action:'register',
        	icon:'resources/images/next.png',
        	iconAlign: 'right',
        	formBind: true,
            disabled: true
        	
	}]
});