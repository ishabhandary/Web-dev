function upDate(previewPic){
    var x=document.getElementById("image");
    x.style.backgroundImage="url("+previewPic.src+")";
    x.style.backgroundColor="#001234";
    x.innerHTML=previewPic.alt;
	}

	function unDo(){
  
    var x=document.getElementById("image");
    x.style.backgroundImage="url('')";
    x.style.backgroundColor="#8e68ff";
    x.innerHTML="Hover over an image below to display here."; 
		
	}