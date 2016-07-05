var GridRender = {
    renderCell:function(data,field,row,index,datalist){
        
    },renderRow:function(row,index,datalist){
        
    },renderEmpty:function(){
        
    },renderPagination(){
        
    },renderToolBar:function(tools){
        
    },renderAction:function(actionlist){
        
    }
};
var CellEditor = {// this refers to the td
    input:{
        render:function(data,row,index,datalist){
            $(this).html(data);
        }
    }
};
var DatagridMethod ={
    deleteRow:function(id){
        
    },getSelected:function(){
        
    },insertBefore(data,index){
        
    },load:function(param){
        
    },reload:function(){
        
    },
};
function DataGrid(){
    if(arguments.length = 1 && typeof arguments[0] == 'object'){// init
        
    }else{
        var method = arguments[0];
        if(arguments.length == 1){
            return DatagridMethod[method].apply();    
        }else{
            return DatagridMethod[method].apply(arguments.slice(1));
        }
    }
}

$.fn.datagrid = DataGrid;

if(typeof define == 'function' && define.amd){
    define([],function(){
        return $.fn.datagrid;
    });
}