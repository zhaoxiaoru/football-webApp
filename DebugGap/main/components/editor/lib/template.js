(function(){
    
    function find_comment(node){
        var value,i,len;
        for( i=0,len=node.childNodes.length;i<len;i++){
            if( node.childNodes[i].nodeType == 8 ){
                value = node.childNodes[i].nodeValue.trim();
                value = value.match(/{(.*)}/);
                if( value && value[1] ){
                    value = value[1];
                    if( value.slice(0,4) == 'lan:' ){
                        value = get_language(value.slice(4));
                    }else{
                        value = value.split('.');
                        var obj = window;
                        while( value.length ){
                            obj = obj[value.shift()];
                        }
                        value = obj;
                    }
                    
                    replace_comment(node.childNodes[i],value);
                }
            }else if( node.childNodes[i].nodeType == 1 ) {
                find_comment(node.childNodes[i]);
            }
        }
    }
    
    function replace_property(){
        $('input').each(function(){
            var attrs = this.attributes,value,index;
            for( index=0;index<attrs.length;index++ ){
                if( !attrs[index] ){
                    continue;
                }
                value = $(this).attr(attrs[index].name).trim();
                value = value.match(/<!--{(.*)}-->/);
                if( value && value[1] ){
                    value = value[1];
                    if( value.slice(0,4) == 'lan:' ){
                        value = get_language(value.slice(4));
                    }else{
                        value = value.split('.');
                        var obj = window;
                        while( value.length ){
                            obj = obj[value.shift()];
                        }
                        value = obj;
                    }
                    
                    $(this).attr(attrs[index].name,value);
                }
            }
        });
    }
    
    function replace_comment(node,value){
        $(node).after(value);
        $(node).remove();
    }
    
    function get_language(value){
        value = value.split('.');
        var rt = parent.lanObject;
        while(value.length){
            rt = rt[value.shift()];
        }
        return rt;
    }
    
    find_comment(document.body);
    replace_property();
})()