'use strict';

goog.provide('Blockly.Blocks.activity');

goog.require('Blockly.Blocks');

Blockly.Blocks['activity_start'] = {
  init: function() {
    this.jsonInit({
      "id": "activity_start",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/btn_start.png",
          "width": 40,
          "height": 40,
          "alt": "snowflake",
          "flip_rtl": true
        }
      ],
      "nextStatement": "Stamp",
      "inputsInline": true,
      "category": Blockly.Categories.activity,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};
Blockly.JavaScript['activity_start'] = function(block) {
  return '';
};
Blockly.JavaScript['control_repeat']=function(a){var b=a.getField("TIMES")?String(Number(a.getFieldValue("TIMES"))):Blockly.JavaScript.valueToCode(a,"TIMES",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0",c=Blockly.JavaScript.statementToCode(a,"SUBSTACK"),c=Blockly.JavaScript.addLoopTrap(c,a.id);a="";var d=Blockly.JavaScript.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.JavaScript.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),
a+="var "+e+" = "+b+";\n");return a+("for (var "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};


Blockly.JavaScript['math_number']=function(a){return[parseFloat(a.getFieldValue("NUM")),Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['math_whole_number']=Blockly.JavaScript.math_number;

Blockly.Blocks['sprite_right'] = {
  init: function() {
    this.jsonInit({
      "id": "sprite_right",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/right.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};



Blockly.Blocks['sprite_left'] = {
 init: function() {
    this.jsonInit({
      "id": "sprite_left",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/left.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.Blocks['sprite_forward'] = {
 init: function() {
    this.jsonInit({
      "id": "sprite_left",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/forward.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.motion,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};

Blockly.JavaScript['sprite_forward'] = function(block) {
  // Generate JavaScript for moving forward or backwards.
  var steps =block.getFieldShadowBlock_().getFieldValue('NUM');
  return 'canvas.moveSprite(' + steps + ');\n';
};
Blockly.JavaScript['sprite_back'] = function(block) {
  // Generate JavaScript for moving forward or backwards.
  var steps = block.getFieldShadowBlock_().getFieldValue('NUM');
  return 'canvas.moveSprite(-' + steps + ');\n';
};
Blockly.Blocks['sprite_back'] = {
 init: function() {
    this.jsonInit({
      "id": "sprite_back",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/back.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": Blockly.Colours.motion.primary,
      "colourSecondary": Blockly.Colours.motion.secondary,
      "colourTertiary": Blockly.Colours.motion.tertiary
    });
  }
};
Blockly.Blocks['play_sound'] = {
  init: function() {
    this.jsonInit({
      "id": "play_sound",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/speaker.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.sound,
      "colour": Blockly.Colours.sounds.primary,
      "colourSecondary": Blockly.Colours.sounds.secondary,
      "colourTertiary": Blockly.Colours.sounds.tertiary
    });
  }
};
Blockly.Blocks['change_background'] = {
  init: function() {
    this.jsonInit({
      "id": "change_background",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/ic_wallpaper.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};
Blockly.Blocks['change_costume'] = {
  init: function() {
    this.jsonInit({
      "id": "change_costume",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/costume.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "DURATION",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};
Blockly.Blocks['change_mood'] = {
  init: function() {
    this.jsonInit({
      "id": "change_mood",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/smile.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "CHOICE",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};
Blockly.Blocks['dropdown_change_mood'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/smile.svg',
              value: 'happy', width: 48, height: 48, alt: 'Happy'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/neutral.svg',
              value: 'neutral', width: 48, height: 48, alt: 'Neutral'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/frown.svg',
              value: 'sad', width: 48, height: 48, alt: 'Sad'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.looks.primary,
      Blockly.Colours.looks.secondary,
      Blockly.Colours.looks.tertiary
    );
  }
};
Blockly.Blocks['change_effect'] = {
  init: function() {
    this.jsonInit({
      "id": "change_effect",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "icons/filter.svg",
          "width": 40,
          "height": 40,
          "alt": "Wait"
        },
        {
          "type": "input_value",
          "name": "CHOICE",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.looks,
      "colour": Blockly.Colours.looks.primary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary
    });
  }
};
Blockly.Blocks['dropdown_change_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldIconMenu([
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/sparkle.svg',
              value: 'sparkle', width: 48, height: 48, alt: 'Sparkle'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/trail.svg',
              value: 'neutral', width: 48, height: 48, alt: 'Neutral'},
            {src: Blockly.mainWorkspace.options.pathToMedia + 'icons/color.svg',
              value: 'sad', width: 48, height: 48, alt: 'Sad'}
        ]), 'CHOICE');
    this.setOutput(true);
    this.setColour(Blockly.Colours.looks.primary,
      Blockly.Colours.looks.secondary,
      Blockly.Colours.looks.tertiary
    );
  }
};


