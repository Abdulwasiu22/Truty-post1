function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var title = document.getElementbyid('title').value;
  var message = document.getElementById('message').value;

  if(name==" " || email==" " || title==" " || message==" ")
  {
    document.getElementById('errormsg').innerHTML = "You are required to fill all field";
    return false;
  }
  else if(name.length < 4){
    document.getElementById('errormsg').innerHTML = "Enter atleast 4 characters";
    return false;
  }
  else if(message.length < 20){
    document.getElementById('errormsg').innerHTML = "Enter atleast 20 characters";
    return false;
  }
  else{
    return true;
  }
  
}
