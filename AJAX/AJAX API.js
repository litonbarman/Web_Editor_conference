function ajaxREQ = {
	send = function(method="GET", dest="process.php", query=null){
	  
	   var sock;
	   
	     try  
		 {    
              sock = new XMLHttpRequest();
         }  
	     catch(e)
		 {
              try  
			  {      
                    sock = new ActiveXObject("Microsoft.XMLHttp");    
              }  
			  catch(e)
			  { 
			        sock = false;
			  }  
         } 
	 
	 
	  	if(sock != false){
			alert();
		      sock.open(method, (dest.concat(query)), true);
     
	          sock.onreadystatechange =function(){
                     if(sock.readyState==4 && sock.status==200){
		                     retrun sock.responseText;
		             }	
	          }
              sock.send(null); 	
		}
	}
}