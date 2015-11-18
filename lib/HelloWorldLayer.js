import {res} from './resource.js';

const HelloWorldLayer = cc.Layer.extend({
  sprite: null,
  ctor() {
    this._super();

    const size = cc.winSize;

    const helloLabel = new cc.LabelTTF('Hello World', 'Arial', 38);
    // position the label on the center of the screen
    helloLabel.x = size.width / 2;
    helloLabel.y = size.height / 2 + 200;
    // add the label as a child to this layer
    this.addChild(helloLabel, 5);

    // add "HelloWorld" splash screen"
    this.sprite = new cc.Sprite(res.HelloWorld_png);
    this.sprite.attr({
      x: size.width / 2,
      y: size.height / 2,
    });
    this.addChild(this.sprite, 0);

    return true;
  },
});

export default HelloWorldLayer;
