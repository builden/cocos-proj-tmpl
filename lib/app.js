import {allRes} from './resource.js';
import HelloWorldScene from './HelloWorldScene.js';

function initCocosProps() {
  console.debug('initCocosProps');
  cc.color.BROWN = cc.color(94, 38, 18);
  // 设定2D投影
  cc.director.setProjection(cc.Director.PROJECTION_2D);

  if (!cc.sys.isNative && document.getElementById('cocosLoading')) {
    // If referenced loading.js, please remove it
    document.body.removeChild(document.getElementById('cocosLoading'));
  }

  // Pass true to enable retina display, disabled by default to improve performance
  cc.view.enableRetina(true);
  // Adjust viewport meta
  cc.view.adjustViewPort(true);
  // 暂时不让全屏，调试很麻烦
  cc.view.enableAutoFullScreen(false);

  // Setup the resolution policy and design resolution size
  let RP = cc.ResolutionPolicy.FIXED_WIDTH;
  const [width, height] = [640, 1136];
  if (!cc.sys.isMobile && !cc.sys.isNative) {
    RP = cc.ResolutionPolicy.SHOW_ALL;
  }
  cc.view.setDesignResolutionSize(width, height, RP);
  // The game will be resized when browser size change
  cc.view.resizeWithBrowserSize(true);
}

function preStart() {
  console.debug('preStart');
}

function onLoaded() {
  console.log('onLoaded');
  cc.director.runScene(new HelloWorldScene());
}

cc.game.es6Start = function gameStart() {
  initCocosProps();

  preStart();

  console.log('preload');
  cc.LoaderScene.preload(allRes, onLoaded, this);
};
