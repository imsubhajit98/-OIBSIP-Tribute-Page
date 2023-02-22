        var musicDiV=document.getElementById("music");
        var iconDiv=document.getElementById("icon");
        iconDiv.onclick=function(){
            if(musicDiV.paused){  //paused is media property
                musicDiV.play();   //play is media function
                iconDiv.src="pause1.png";  //image source file
            }else{
                musicDiV.pause();  //pause is media function
                iconDiv.src="play1.png";
            }
        }
  