var option, optionJoin=0, optionCreate=0;
 function showOption(option){
   if(option==0){
     if(optionJoin==0){
       document.getElementById('create').style.display = "none";
       optionCreate=0;
       document.getElementById('join').style.display = "block";
       optionJoin=1;
     }
     else{
       document.getElementById('join').style.display = "none";
	   document.getElementById('join_nav').innerHTML = "Search Group";
       optionJoin=0;
     }
   }
   else{
     if(optionCreate==0){
       document.getElementById('join').style.display = "none";
	   document.getElementById('join_nav').innerHTML = "Search Group";
       optionJoin=0;
       document.getElementById('create').style.display = "block";
       optionCreate=1;
     }
     else{
       document.getElementById('create').style.display = "none";
       optionCreate=0;
     }
   }
 }