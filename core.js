"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.Tile = exports.TileMap = exports.Game = void 0;
const coreApi_1 = require("./coreApi");
class Game extends coreApi_1.Game {
    handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowUp':
                const upTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.y === this.currentPlayer.currentTile.y + 1);
                if (upTile)
                    this.currentPlayer.moveTo(upTile);
                break;
            case 'ArrowDown':
                const downTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.y === this.currentPlayer.currentTile.y - 1);
                if (downTile)
                    this.currentPlayer.moveTo(downTile);
                break;
            case 'ArrowLeft':
                const leftTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.x === this.currentPlayer.currentTile.x - 1);
                if (leftTile)
                    this.currentPlayer.moveTo(leftTile);
                break;
            case 'ArrowRight':
                const rightTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.x === this.currentPlayer.currentTile.x + 1);
                if (rightTile)
                    this.currentPlayer.moveTo(rightTile);
                break;
        }
    }
    constructor(currentPlayer) {
        super();
        this.currentPlayer = currentPlayer;
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }
}
exports.Game = Game;
class TileMap extends coreApi_1.TileMap {
    constructor() {
        super();
        this.tiles = [];
    }
}
exports.TileMap = TileMap;
class Tile extends coreApi_1.Tile {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
}
exports.Tile = Tile;
class Player extends coreApi_1.Player {
    constructor(initialTile) {
        super();
        this.currentTile = initialTile;
    }
    moveTo(tile) {
        const isNeighbor = this.currentTile && this.currentTile.neighboringTiles && this.currentTile.neighboringTiles.includes(tile);
        if (isNeighbor) {
            this.currentTile = tile;
        }
    }
}
exports.Player = Player;
//# sourceMappingURL=core.js.map