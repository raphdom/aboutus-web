Ext.define('AboutUs.view.person.TabData', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.persontabdata',
    
    title:'Dados Pessoais',
    
    closable:false,
    
    items:[{
        layout: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 100
        },
        defaultType: 'textfield',
        items: [
       	{
			fieldLabel: 'id',
			name : 'id',
			hidden:true
		},{
            fieldLabel: 'Nome',
            name: 'name',
            allowBlank: false
		},{
			xtype: 'fieldcontainer',
            fieldLabel: 'Sexo',
            defaultType: 'radiofield',
            layout:'hbox',
            name:'male',
            defaults: {
                flex: 1
            },
            items: [
                {
                    boxLabel  : 'Masculino',
                    name      : 'male',
                    inputValue: 'true',
                    id        : 'checkMale'
                }, {
                    boxLabel  : 'Feminino',
                    name      : 'male',
                    inputValue: 'false',
                    id        : 'checkFemale'
                }
            ]
		},{
			xtype:'combo',
			fieldLabel: 'Estado Civil',
            name: 'civilStatusValue',
            store:'list.CivilStatusStore',
            displayField:'text',
    		valueField:'value'
		},{
			xtype:'combo',
			fieldLabel: 'Naturalidade',
            name: 'naturalityValue',
            store:'list.CountryStore',
            displayField:'text',
    		valueField:'value'
        },{
			xtype:'datefield',
			fieldLabel: 'Data de Nascimento',
            name: 'birthday'
        },{
			fieldLabel: 'NIF',
            name: 'nif',
            allowBlank: false
        },{
			fieldLabel: 'Profissão',
            name: 'profession'
        },{
			xtype      : 'fieldcontainer',
            fieldLabel : 'Membro',
            defaultType: 'radiofield',
            allowBlank: false,
            name:'member',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : 'Sim',
                    name      : 'member',
                    inputValue: 'true',
                    id        : 'memberYes',
                    checked:true
                }, {
                    boxLabel  : 'Não',
                    name      : 'member',
                    inputValue: 'false',
                    id        : 'memberNo'
                }
            ]
        },{
			xtype:'combo',
			fieldLabel: 'Tipo de Membro',
            name: 'memberTypeValue',
            store:'list.MemberTypeStore',
            displayField:'text',
    		valueField:'value'
        }]
    }]
    
    
});