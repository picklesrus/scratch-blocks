function MySprite() {
	this.img = new Image()
	this.img.src = Blockly.mainWorkspace.options.pathToMedia + "turtle.png"
	this.x = 50;
	this.y = 50;
	this.height = 64;
	this.width = 64;
	this.rotation = 0;
};

MySprite.prototype.draw = function(ctx, x, y) {
  ctx.drawImage(this.img, x, y);
};

MySprite.prototype.move = function(steps) {
  this.x += steps;
};

MySprite.prototype.rotate = function(steps) {
  this.rotation += steps;
};

function MyCanvas() {
	this.canvas = document.getElementById('myCanvas');
	this.width = 450;
	this.height = 450;
    this.context = this.canvas.getContext('2d');
    this.sprite = null;
};

MyCanvas.prototype.setSprite = function(sprite) {
	this.sprite = sprite;
};

MyCanvas.prototype.redraw = function() {
	this.context.clearRect(0, 0, this.height, this.height);
	this.context.save();
	this.context.translate(this.sprite.x, this.sprite.y);
	this.sprite.draw(this.context, 0, 0);
	this.context.restore();
};

MyCanvas.prototype.moveSprite = function(steps) {
	this.sprite.move(steps);
	this.redrawSprite();
};

MyCanvas.prototype.redrawSprite = function() {
	this.context.clearRect(0, 0, this.width, this.height);
	this.context.save(); 
	// move to the middle of where we want to draw our image
  	this.context.translate(this.sprite.x , this.sprite.y);
  	this.context.translate(this.sprite.width/2.0, this.sprite.height/2.0);
 
	// rotate around that point, converting our 
	// angle from degrees to radians 
	this.context.rotate(this.sprite.rotation);
 
	// draw it up and to the left by half the width
	// and height of the image 
	this.sprite.draw(this.context, -this.sprite.width/2.0, -this.sprite.height/2.0);
 
	// and restore the co-ords to how they were when we began
	this.context.restore(); 
};

MyCanvas.prototype.rotateSprite = function(steps) {
  var TO_RADIANS = Math.PI/180; 
  	this.sprite.rotate(steps);
  	this.redrawSprite();
};
