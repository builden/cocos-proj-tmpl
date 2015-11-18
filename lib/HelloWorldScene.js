import HelloWorldLayer from './HelloWorldLayer.js';
const HelloWorldScene = cc.Scene.extend({
  onEnter() {
    this._super();
    const layer = new HelloWorldLayer();
    this.addChild(layer);
  },
});

export default HelloWorldScene;
