Ext.define('AboutUs.view.user.TabUserData', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.usertabuserdata',
    
    requires:['AboutUs.view.component.ChurchCombo',
    		  'AboutUs.view.component.PersonCombo'],
    
    title:'Dados',
    
    closable:false,
    
    items:[{
        layout: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaultType: 'textfield',
        items: [{
			fieldLabel: 'id',
			name : 'id',
			hidden:true
		},{
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false,
            vtype:'email'
        },{
            fieldLabel: 'Pessoa',
            name: 'person',
            xtype:'personcombo',
            allowBlank: true
        },{
        	xtype:'churchcombo',
        	name: 'church.id',
            fieldLabel: 'Igreja',
            allowBlank: false
        },{
			name : 'groups',
			hidden:true
		},{
			name : 'permissions',
			hidden:true
		}]
    }]
    
    
});