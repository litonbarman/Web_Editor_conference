
 function AJAXrequest(method="GET", dest="process.php", query=null, handle=function(argu){document.write(argu);}){
     var sock;
	 
	 try  {    
      sock = new XMLHttpRequest();
    }  catch(e){
       try
        {      
          sock = new ActiveXObject("Microsoft.XMLHttp");    
        }
        catch(e){}  
    } 
	 
	 
	  	
	 sock.open(method, (dest.concat(query)), true);
     
	 sock.onreadystatechange =function(){
        if(sock.readyState==4 && sock.status==200){
		 handle(sock.responseText);
		}	
	 }
     sock.send(null);
 }
 