import {Game as GameAPI, TileMap as TileMapAPI, Tile as TileAPI, Player as PlayerAPI} from './coreApi'

export class Game extends GameAPI {

    private handleKeyPress(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowUp':
                const upTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.y === this.currentPlayer.currentTile.y + 1);
                if (upTile) this.currentPlayer.moveTo(upTile);
                break;
            case 'ArrowDown':
                const downTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.y === this.currentPlayer.currentTile.y - 1);
                if (downTile) this.currentPlayer.moveTo(downTile);
                break;
            case 'ArrowLeft':
                const leftTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.x === this.currentPlayer.currentTile.x - 1);
                if (leftTile) this.currentPlayer.moveTo(leftTile);
                break;
            case 'ArrowRight':
                const rightTile = this.currentPlayer.currentTile.neighboringTiles.find(tile => tile.x === this.currentPlayer.currentTile.x + 1);
                if (rightTile) this.currentPlayer.moveTo(rightTile);
                break;
        }
    }

    constructor(public currentPlayer: Player) {
        super()
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }
}

export class TileMap extends TileMapAPI {
    constructor() {
        super();
        this.tiles = [];
    }
}

export class Tile extends TileAPI {
    constructor(readonly x: number, readonly y: number) {
        super();
        this.x = x;
        this.y = y;
    }
}

export class Player extends PlayerAPI {
    currentTile: Tile

    constructor(initialTile: Tile) {
        super();
        this.currentTile = initialTile;
    }
    moveTo(tile: Tile): void {
        const isNeighbor = this.currentTile && this.currentTile.neighboringTiles && this.currentTile.neighboringTiles.includes(tile);
        if (isNeighbor) {
            this.currentTile = tile;
        }
    }
}