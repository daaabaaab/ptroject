var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(img){
        Block_Image_object=img;
        Block_Image_object.scaleToWidth(700);
        Block_Image_object.scaleToHeight(510);
        Block_Image_object.set({
        top:0,
        left:0
        });
        canvas.add(Block_Image_object);
        });  
        }	
	


function playSound(){
x.play();	
}
