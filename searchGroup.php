<?php
 $file = file("php_dump/groups.dump");
 
 foreach($file as $line){
	 echo $line;
 }
?>