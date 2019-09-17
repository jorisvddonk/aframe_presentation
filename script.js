AFRAME.registerComponent("hamster", {
  schema: {},
  tick: function(time, timeDelta) {
    this.el.object3D.rotation.y += Math.PI * 0.001 * timeDelta;
  }
});

AFRAME.registerComponent("click-handler", {
  schema: {},
  init: function() {
    this.el.addEventListener("click", () => {
      this.el.setAttribute("color", "#f00");
    });
  }
});
