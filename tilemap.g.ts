// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000010101010101010101000000010100000000000000000000000000000101000101010101010101010101000001010000000000000000000000000000010100010000000000000000000000000101000100000000000000000000000001010001000101010101010101010000010100010000000000000000000000000101000100010100000000000000000001010000000000000000000000000000010100010101010101000001010100000101000000010100000000010101010101010100000101000001000101010101010101010000000000010001010101010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 2 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 2 . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . 2 2 . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 . . 2 2 2 . . 2 
2 . . . 2 2 . . . . 2 2 2 2 2 2 
2 2 . . 2 2 . . 2 . 2 2 2 2 2 2 
2 2 2 . . . . . 2 . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
