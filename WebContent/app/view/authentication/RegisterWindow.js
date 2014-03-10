Ext.define('AboutUs.view.authentication.RegisterWindow', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.registerwindow',
    
    title: 'Registo efetuado',
    html:'Registo efetuado com sucesso, ' +
    		'para ativar a sua conta dever� fazer o login pela ' +
    		'primeira vez, clicando sobre o bot�o de login abaixo ' +
    		'e indicando os dados de acesso que indicou no registo.<br>' +
    		'Obrigado pelo seu registo no AboutUs e esperamos' +
    		'que ajude a guiar o seu rebanho tamb�m.<br>' +
    		'Equipa AboutUs',
    width: 700,
    height: 300,
    frame:true,
    bodyPadding: '10 20',
    renderTo:'senchaTarget',
    buttons: [{
        text: 'Ir para Login',
        action:'login'
    }]
});