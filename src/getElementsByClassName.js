// If life was easy, we could just do things the easy way:
/* var getElementsByClassName = function (className) {
   return Array.prototype.slice.apply(document.getElementsByClassName(className)); 
   //Had to convert to an array to see spec pass first
 };*/

//Requirements: You should use document.body, element.childNodes, and element.classList


var getElementsByClassName = function(cName){
	
  var results=[];
  function recursion (start){
	if (!start) {
		start=document.body;
		if(start.classList.contains(cName)) results.push(start);
	}
	var node='';
		for(var i=0,count=start.childNodes.length; i<count; i++){
			node=start.childNodes[i];
			if(node.hasChildNodes()) recursion(node);
			
			if(node.classList){
			if(node.classList.contains(cName)) results.push(node);
			}
		}
  };  
  recursion();
  return results;

};