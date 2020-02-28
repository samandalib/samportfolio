function whoIsIt(){
  document.getElementById("Error").innerHTML = "";
  let entered = document.getElementById("pass").value;
  let link = "https://docs.google.com/presentation/d/1aGtfkGxuaKwORUN2BY-Ip5SS7yWzZjb_oRsXui4nldM/edit?usp=sharing"

  if (entered === "iamexcited"){
      document.getElementById("link").setAttribute("href",link) ;
      document.getElementById("link").style.display = "block"
  }
  else{
      document.getElementById("Error").innerHTML = "Wrong Password";

  }

}
