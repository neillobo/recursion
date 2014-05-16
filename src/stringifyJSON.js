// this is what you would do if you liked things to be easy:
//var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var stringifyJSON = function(obj) {
   
    if(obj===undefined) return "";
     if (obj==null) return 'null';
    
    var type=typeof obj;
    
    var resultString='';
    
    switch(type){
        case "function":
            return "";
        case "number":
            return obj.toString();
        case "boolean":
            return obj.toString();
        case "string":
            return "\""+obj+"\"";
        case 'object':
            if (Array.isArray(obj)) {
                //Array operations
                if (obj.length===0) return "[]";
                    resultString = "[";
                    obj.forEach(function(item, index){

                        resultString+= stringifyJSON(item);
                        if(index!==obj.length-1)
                        resultString+= ',';
                    });
            resultString+="]";
            return resultString;
            }
            else{//Now it is an object
               var osize = Object.size(obj),i=0;
               if (osize===0) return "{}"; 
               resultString = "{";
                    for (var key in obj){
                    i++;
                      if (stringifyJSON(obj[key])!==""){
                        resultString+=stringifyJSON(key)+":"+stringifyJSON(obj[key]);
                        if(i!==osize)
                            resultString+=",";
                      }
                    }
            resultString+="}";
            return resultString;
            }
    }
};
