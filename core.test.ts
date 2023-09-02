        
import { expect } from 'chai';
import { Game as GameLogic, TileMap as TileMapLogic, Tile as TileLogic, Player as PlayerLogic } from './core';
globalThis.document = window.document;

const testPlayerTile = new TileLogic(0, 0);
testPlayerTile.neighboringTiles = [
    new TileLogic(0, 1),
    new TileLogic(1, 0),
    new TileLogic(0, -1),
    new TileLogic(-1, 0)
];
const testPlayer = new PlayerLogic(testPlayerTile);
testPlayer.currentTile = testPlayerTile
//Generate tests for core.ts   
describe('GameLogic Movement', function () {
    it('should move player based on arrow keys', function () {
        const game = new GameLogic(testPlayer);
        const initialTile = game.currentPlayer.currentTile;
        testPlayer.currentTile = testPlayerTile

        // Simulate ArrowUp key press
        const upEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
        document.dispatchEvent(upEvent);
        expect(game.currentPlayer.currentTile.y).to.equal(initialTile.y + 1);

        testPlayer.currentTile = testPlayerTile
        // Simulate ArrowDown key press
        const downEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
        document.dispatchEvent(downEvent);
        expect(game.currentPlayer.currentTile.y).to.equal(initialTile.y - 1);

        testPlayer.currentTile = testPlayerTile
        // Simulate ArrowLeft key press
        const leftEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
        document.dispatchEvent(leftEvent);
        expect(game.currentPlayer.currentTile.x).to.equal(initialTile.x - 1);

        testPlayer.currentTile = testPlayerTile
        // Simulate ArrowRight key press
        const rightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
        document.dispatchEvent(rightEvent);
        expect(game.currentPlayer.currentTile.x).to.equal(initialTile.x + 1);
    });
});

describe('GameLogic', function () {
    it('should initialize', function () {
        const game = new GameLogic(testPlayer);
        expect(game).to.be.ok;
    });
});

describe('TileMapLogic', function () {
    it('should initialize', function () {
        const tileMap = new TileMapLogic();
        expect(tileMap).to.be.ok;
    });
});

describe('TileLogic', function () {
    it('should initialize', function () {
        const tile = new TileLogic(0, 0);
        expect(tile).to.be.ok;
    });
});

describe('PlayerLogic', function () {
    it('should initialize and move', function () {
        const initialTile = new TileLogic(0, 0);
        const player = new PlayerLogic(initialTile);
        const tile = new TileLogic(0, 0);
        player.moveTo(tile);
        expect(player.currentTile.x).to.equal(tile.x);
        expect(player.currentTile.y).to.equal(tile.y);
    });
});