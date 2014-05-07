Ext.define('AboutUs.view.common.CriteriaContainer', {
    extend: 'Ext.form.Panel',
    alias:'widget.criteriacontainer',
    
    //layout:'form',
    layout: {
        type: 'table',
        // The total column count must be specified here
        columns: 2,
        tdAttrs: {
            style: {
                'padding-right': '10px'
            }
        }
    },
   	bodyPadding:10,
   	hidden:true,
   	bodyStyle: {
            'background-color': '#DEDEDE'
        }
    
});