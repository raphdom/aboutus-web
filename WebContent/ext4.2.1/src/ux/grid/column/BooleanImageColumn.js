Ext.define('Ext.ux.grid.column.BooleanImageColumn', {
    extend: 'Ext.grid.column.Column',
    alias: ['widget.booleanimagecolumn'],
    alternateClassName: 'Ext.ux.grid.BooleanImageColumn',
    
    trueImage:'resources/images/tick2.png',
    falseImage:'resources/images/cross.png',

    defaultRenderer: function(value){
        if (value === undefined) {
            return "<img src='"+this.falseImage+"' />";
        }
        
        if (!value || value === 'false') {
            return "<img src='"+this.falseImage+"' />";
        }
        return "<img src='"+this.trueImage+"' />";
    }
});