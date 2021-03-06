class Rook extends DirectionalMovePiece {
    
    public init( board : Board ){
        super.init(board);
        
        // we define the directions for the rook
        this.directions = [
            new Sup.Math.Vector2( 1, 0),
            new Sup.Math.Vector2(-1, 0),
            new Sup.Math.Vector2( 0, 1),
            new Sup.Math.Vector2( 0,-1)
        ];
    }
}
Sup.registerBehavior(Rook);
