
var myImage= new Array();
myImage[0]="000.png";
myImage[1]="00.png";
myImage[2]="02.png";
myImage[3]="03.png";
myImage[3]="04.png";
myImage[3]="05.png";
myImage[3]="06.png";

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("whiteBox").style.background = 'url(' + myImage[ImageCnt] + ')';
  }
