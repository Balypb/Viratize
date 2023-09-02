
    export class Game {
        tileMaps: TileMap[];
        currentPlayer: Player;
    }
    
    export class TileMap {
        tiles: Tile[];
    }
    
    export class Tile {
        readonly x: number;
        readonly y: number;
        players: Player[];
        neighboringTiles: Tile[];
    }
    
    export class Player {
        currentTile: Tile;
        moveTo(tile: Tile): void {};
    }