window.onload = ()=>
{
    document.getElementById("links").style.display = "none";
    document.getElementById("intro").style.marginTop = "200px";
    var i = 0;
    var k=0
    var txtIntro = document.getElementById("intro").getAttribute("content");
    var txtName=document.getElementById("htmlEffect").getAttribute("content");
    var name = "HESAM";
    var lastName="ANDALIB";
    var me = document.getElementById("me");
    var speed1 = 50;
    var speed2 = 200;
    typeWriter();



    function typeWriter() {
      me.setAttribute("style", "display:none;");
      if (i < txtIntro.length) {
        console.log("if statement")
        document.getElementById("intro").innerHTML += txtIntro.charAt(i);
        i++;
        setTimeout(typeWriter, speed1);
      }
      else{
        typeMyName();
      }
    }

    function typeMyName(){
        if (k<txtName.length){
          document.getElementById("htmlEffect").innerHTML +=txtName.charAt(k);
          k++;
          setTimeout(typeWriter, speed2);
        }
        else{
          document.getElementsByTagName("body")[0].setAttribute("style", "background-color:#505050;");
          document.getElementById("intro").style.marginTop = "0%";
          document.getElementById("links").style.display = "block";
          document.getElementById("htmlEffect").style.display ="none";
          document.getElementById("name").innerHTML += name;
          document.getElementById("lastName").innerHTML += lastName;
          me.setAttribute("style", "display:block;")
        }

      }

}
