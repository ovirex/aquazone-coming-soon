var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var app;

function initPixi() {
    app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        transparent: true,
    });
    app.view.style.position = "absolute";
    app.view.style.zIndex = "-2";
    app.view.id = "canvas-animation";

    document.body.appendChild(app.view);
    if (window.innerWidth <= 400) {
        var image = new PIXI.Sprite.from("./assets/img/Diving-Aquazone.jpg");
    }
    var image = new PIXI.Sprite.from("./assets/img/Diving-Aquazone.jpg");
    image.width = window.innerWidth;
    image.height = window.innerHeight;
    app.stage.addChild(image);
    displacementSprite = new PIXI.Sprite.from("./assets/img/cloud.jpg");
    displacementFilter = new PIXI.filters.DisplacementFilter(
        displacementSprite
    );
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];

    app.renderer.view.style.transform = "scale(1.02)";
    displacementSprite.scale.x = 4;
    displacementSprite.scale.y = 4;
    animate();
}
function animate() {
    displacementSprite.x += 10;
    displacementSprite.y += 4;
    requestAnimationFrame(animate);
}
initPixi();

// window.addEventListener("resize", function () {
//     const canvasElement = document.getElementById("canvas-animation");
//     canvasElement.parentElement.removeChild(canvasElement);
//     initPixi();
// });
