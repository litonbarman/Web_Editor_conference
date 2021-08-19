function check_win_size(){
    if(window.innerHeight > window.innerWidth){
      document.getElementById('win_size_not').style.display = "block";
    }
    else{
      document.getElementById('win_size_not').style.display = "none";
    }
  }
function exit(){
  window.close();
}
