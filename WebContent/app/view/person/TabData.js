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
            defaults: {
                flex: 1
            },
            items: [
                {
                    boxLabel  : 'Masculino',
                    name      : 'topping',
                    inputValue: 'Y',
                    id        : 'checkbox1'
                }, {
                    boxLabel  : 'Feminino',
                    name      : 'topping',
                    inputValue: '2',
                    id        : 'checkbox2'
                }
            ]
		},{
			xtype:'combo',
			fieldLabel: 'Estado Civil',
            name: 'name',
            store:'list.CivilStatusStore'
		},{
			xtype:'combo',
			fieldLabel: 'Naturalidade',
            name: 'name',
            store:'list.CountryStore'
        },{
			xtype:'datefield',
			fieldLabel: 'Data de Nascimento',
            name: 'birthDate'
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
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : 'Sim',
                    name      : 'member',
                    inputValue: 'y',
                    id        : 'radio1',
                    checked:true
                }, {
                    boxLabel  : 'Não',
                    name      : 'member',
                    inputValue: 'n',
                    id        : 'radio2'
                }
            ]
        },{
			xtype:'combo',
			fieldLabel: 'Tipo de Membro',
            name: 'name',
            store:'list.MemberTypeStore'
        }]
    }]
    
    
});