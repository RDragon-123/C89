canvas=new fabric.Canvas("myCanvas");
player_x=50
player_y=50
blockWidth=30
blockHeight=30
playerObject=""
blockObject=""
function playerupdate(){
   fabric.Image.fromURL("Skin.png",function(img){
playerObject=img;
playerObject.scaleToWidth(150)
playerObject.scaleToHeight(150)
playerObject.set({
   top:player_y,left:player_x
});
canvas.add(playerObject)
   });
}
function blockUpdate(block_image){
   fabric.Image.fromURL(block_image,function (img){
      blockObject=img;
      blockObject.scaleToWidth(blockWidth)
      blockObject.scaleToHeight(blockHeight)
      blockObject.set({
         top:player_y,left:player_x
      });
      canvas.add(blockObject);
   });
}
window.addEventListener("keydown",my_Keydown);
function my_Keydown(e){
   keyPressed=e.keyCode;
   console.log(keyPressed);
   if(e.shiftKey==true&&keyPressed=='80'){
    blockWidth=blockWidth+10
    blockHeight=blockHeight+10
    document.getElementById("current_width").innerHTML=blockWidth
    document.getElementById("current_height").innerHTML=blockHeight
   }
    if(e.shiftKey==true&&keyPressed=='77'){
      blockWidth=blockWidth-10
      blockHeight=blockHeight-10
      document.getElementById("current_width").innerHTML=blockWidth
      document.getElementById("current_height").innerHTML=blockHeight
   }
   if (keyPressed=='37'){
      left();
   }
   if (keyPressed=='38'){
      up();
   }
   if (keyPressed=='39'){
      right();
   }
   if (keyPressed=='40'){
      down();
   }
   if(keyPressed=='65'){
      blockUpdate("1.jpeg");
   }
   if(keyPressed=='66'){
      blockUpdate("blue.jpeg");
   }
   if(keyPressed=='67'){
      blockUpdate("cloud.jpg");
   }
   if(keyPressed=='68'){
      blockUpdate("dark_green.png");
   }
   if(keyPressed=='69'){
      blockUpdate("glowstone.png");
   }
   if(keyPressed=='70'){
      blockUpdate("green.jpeg");
   }
   if(keyPressed=='71'){
      blockUpdate("ground.png");
   }
   if(keyPressed=='76'){
      blockUpdate("light_green.png");
   }
   if(keyPressed=='82'){
      blockUpdate("roof.jpg");
   }
   if(keyPressed=='84'){
      blockUpdate("trunk.jpg");
   }
   if(keyPressed=='87'){
      blockUpdate("wall.jpg");
   }
   if(keyPressed=='89'){
      blockUpdate("yellow_wall.png");
   }
   if(keyPressed=='90'){
      blockUpdate("yellow.jpeg");
   }
}
function left (){
   if (player_x >=0){
      player_x=player_x-blockWidth;
      canvas.remove(playerObject);
      playerupdate();
   }
}
function right (){
   if (player_x <=900){
      player_x=player_x+blockWidth;
      canvas.remove(playerObject);
      playerupdate();
   }
}
function up (){
   if (player_y >=0){
      player_y=player_y-blockHeight;
      canvas.remove(playerObject);
      playerupdate();
   }
}
function down (){
   if (player_y <=500){
      player_y=player_y+blockHeight;
      canvas.remove(playerObject);
      playerupdate();
   }
}