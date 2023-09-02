"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const core_1 = require("./core");
globalThis.document = window.document;
const testPlayerTile = new core_1.Tile(0, 0); 
testPlayerTile.neighboringTiles = [
    new core_1.Tile(0, 1),
    new core_1.Tile(1, 0),
    new core_1.Tile(0, -1),
    new core_1.Tile(-1, 0)
];
const testPlayer = new core_1.Player(testPlayerTile);
testPlayer.currentTile = testPlayerTile;
//Generate tests for core.ts   
describe('GameLogic Movement', function () {
    it('should move player based on arrow keys', function () {
        const game = new core_1.Game(testPlayer);
        const initialTile = game.currentPlayer.currentTile;
        testPlayer.currentTile = testPlayerTile;
        // Simulate ArrowUp key press
        const upEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
        document.dispatchEvent(upEvent);
        (0, chai_1.expect)(game.currentPlayer.currentTile.y).to.equal(initialTile.y + 1);
        testPlayer.currentTile = testPlayerTile;
        // Simulate ArrowDown key press
        const downEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
        document.dispatchEvent(downEvent);
        (0, chai_1.expect)(game.currentPlayer.currentTile.y).to.equal(initialTile.y - 1);
        testPlayer.currentTile = testPlayerTile;
        // Simulate ArrowLeft key press
        const leftEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
        document.dispatchEvent(leftEvent);
        (0, chai_1.expect)(game.currentPlayer.currentTile.x).to.equal(initialTile.x - 1);
        testPlayer.currentTile = testPlayerTile;
        // Simulate ArrowRight key press
        const rightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
        document.dispatchEvent(rightEvent);
        (0, chai_1.expect)(game.currentPlayer.currentTile.x).to.equal(initialTile.x + 1);
    });
});
describe('GameLogic', function () {
    it('should initialize', function () {
        const game = new core_1.Game(testPlayer);
        (0, chai_1.expect)(game).to.be.ok;
    });
});
describe('TileMapLogic', function () {
    it('should initialize', function () {
        const tileMap = new core_1.TileMap();
        (0, chai_1.expect)(tileMap).to.be.ok;
    });
});
describe('TileLogic', function () {
    it('should initialize', function () {
        const tile = new core_1.Tile(0, 0);
        (0, chai_1.expect)(tile).to.be.ok;
    });
});
describe('PlayerLogic', function () {
    it('should initialize and move', function () {
        const initialTile = new core_1.Tile(0, 0);
        const player = new core_1.Player(initialTile);
        const tile = new core_1.Tile(0, 0);
        player.moveTo(tile);
        (0, chai_1.expect)(player.currentTile.x).to.equal(tile.x);
        (0, chai_1.expect)(player.currentTile.y).to.equal(tile.y);
    });
});
//# sourceMappingURL=core.test.js.map