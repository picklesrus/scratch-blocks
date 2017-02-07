function MySprite(img) {
	this.img = new Image();
	this.img.src = Blockly.mainWorkspace.options.pathToMedia + "frog.svg";
	this.x = 50;
	this.y = 50;
	this.height = 64;
	this.width = 64;
	this.rotation = 0;
	this.maxX = 512;
	this.maxY = 384;
};

MySprite.prototype.draw = function(ctx, x, y) {
  ctx.drawImage(this.img, x, y);
};

MySprite.prototype.move = function(steps) {
  var scaledStep = steps; 
  this.x += scaledStep*Math.sin((this.rotation + 90)  * (Math.PI/180));
  this.y += -1*scaledStep*Math.cos((this.rotation + 90)  * (Math.PI/180));
  if (this.x > this.maxX) {
  	this.x =  -this.width / 2.0;
  } else if (this.x < -(this.width / 2.0)) {
  	this.x = this.maxX - this.width / 2.0;
  }
  if (this.y > this.maxY) {
  	this.y = -this.height/2.0;
  } else if (this.y < -this.height/2.0) {
    this.y = this.maxY - this.height/2.0;
  }
};

MySprite.prototype.rotate = function(steps) {
  this.rotation += steps;
  if (this.rotation > 360) {
  	this.rotation = 0;
  }
};

MySprite.prototype.setSpriteImage = function(img) {
  this.img = img;
};

function MyCanvas() {
	this.canvas = document.getElementById('myCanvas');
	this.width = 512;
	this.height = 384;
    this.context = this.canvas.getContext('2d');
    this.sprite = null;
};

MyCanvas.prototype.setSprite = function(sprite) {
	this.sprite = sprite;
};

MyCanvas.prototype.changeSpriteImage = function(img) {
	this.sprite.setSpriteImage(img);
	this.redrawSprite();
};

MyCanvas.prototype.setBackground = function(background) {
	this.background = background;
	var s ='url(\'../media/' + background + '\')';
	this.canvas.style.background = s;
	this.canvas.style.backgroundRepeat = 'no-repeat';
	this.canvas.style.backgroundSize = 'contain';

};

MyCanvas.prototype.redraw = function() {
	this.context.clearRect(0, 0, this.height, this.height);
	this.context.save();
	this.context.translate(this.sprite.x, this.sprite.y);
	this.sprite.draw(this.context, 0, 0);
	this.context.restore();
};
MyCanvas.prototype.clear = function() {
	this.context.clearRect(0, 0, this.height, this.height);
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
	this.context.rotate(this.sprite.rotation * Math.PI/180);
 
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
