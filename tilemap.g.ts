// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`2000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000708090a0708090a0708090a0708090a0708090a0708090a0708090a0708090a0606060606060606060606060606060605050505050505050505050505050505050505050505050505050505050505050505050c0c0c0c0c0c0c0c05050505050505050c0c0c0c0c0c0c0c05050505050505050c0c0c0c0c0c0c0c05050505050505050c0c0c0c0c0c0c0c05050505050505050c0c0c0c0c0c0c0c030303030305050505050505050505040b0b0b0b0b05050505050505050505040b0b0b0b0b05050505050505050505040b0b0b0b0b01030303030303030303020b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.skillmap.islandTile7,sprites.skillmap.islandTile5,sprites.skillmap.islandTile4,sprites.vehicle.roadHorizontal,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Water":
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
            case "myTile0":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
