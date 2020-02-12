window.onload = ()=>
{
    //document.getElementById("YellowPage").setAttribute('style','display:none');
    let works = document.getElementById('works');
    works.setAttribute('style', 'display:none');

    var cursor = true;
    var speed = 220;

    setInterval(() => {
       if(cursor) {
         document.getElementById('cursor').style.opacity = 0;
         cursor = false;
       }else {
         document.getElementById('cursor').style.opacity = 1;
         cursor = true;
       }
    }, speed);


    var cursor2 = document.getElementById("htmlEffect").innerHTML;


    document.getElementById("myProgress").style.display = "none";
    document.getElementById("links").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("intro").style.marginTop = "200px";
    document.getElementById("myphoto").style.display = "none";
    document.getElementById("mygreeting").style.display="none";
    var i = 0;
    var k=0
    var txtIntro = document.getElementById("intro").getAttribute("content");
    var txtName=document.getElementById("htmlEffect").getAttribute("content");
    var name = "HESAM";
    var lastName="ANDALIB";
    var me = document.getElementById("me");
    var speed1 = 50;
    var speed2 = 100;
    typeWriter();


    function typeWriter() {
      me.setAttribute("style", "display:none;");
      if (i < txtIntro.length) {
        document.getElementById("intro").innerHTML += txtIntro.charAt(i);
        i++;
        setTimeout(typeWriter, 0);

      }
      else{
        typeMyName();
      }
    }

    function typeMyName(){
        if (k<txtName.length+1){
          let current = txtName.substring(0,k)
          let text = current.concat(cursor2);
          document.getElementById("htmlEffect").innerHTML = text;
          k++;
          setTimeout(typeWriter, speed2);


        }
        else{
          move();
          setTimeout(showContent, 1200);

          function showContent(){
            //document.getElementById("YellowPage").setAttribute('style','display:block');
            document.getElementById("myProgress").style.display="none";
            document.getElementById("intro").style.marginTop = "0%";
            document.getElementById("intro").style.display = "block";

            document.getElementById("links").style.display = "block";
            document.getElementById("htmlEffect").style.display ="none";
            document.getElementById("name").innerHTML += name;
            document.getElementById("lastName").innerHTML += lastName;
            document.getElementById("myphoto").style.display = "block";
            document.getElementById("mygreeting").style.display="block";
            me.setAttribute("style", "display:block;")
          }

        }

      }

  function move() {
    document.getElementById("myProgress").style.display="block";
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

}
