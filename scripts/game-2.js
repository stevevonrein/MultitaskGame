var game2 = (function (parent) {
    var game2 = Object.create(parent);

    // When the game is over, please set game1.over = true;

    // If you need to initialize the state of your game, please use this property. Otherwise feel free to
    // remove it from the code. The parent.init will be called due to the prototype chain.
    Object.defineProperty(game2, 'init', {
        value: function (renderer, player, gameObjects) {
            parent.init.call(this, renderer, player, gameObjects);

            return this;
        }
    });

    //TODO: check if it is possible to move this logic to parent
    Object.defineProperty(game2, 'update', {
        value: function () {
            this.renderer.renderAll(this.player, this.gameObjects);
            // Move gameObjects
            // Check for collision
        }
    });

    return game2;
}(game));