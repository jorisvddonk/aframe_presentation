AFRAME.registerComponent("controllable", {
  schema: {},
  init: function() {
    this.keyboard = this.el.sceneEl.systems["keyboard"];
  },
  tick: function(time, timeDelta) {
    if (this.keyboard.isKeyDown("KeyQ")) {
      this.el.object3D.rotation.y += Math.PI * 0.001 * timeDelta;
    }
    if (this.keyboard.isKeyDown("KeyE")) {
      this.el.object3D.rotation.y -= Math.PI * 0.001 * timeDelta;
    }
  }
});
