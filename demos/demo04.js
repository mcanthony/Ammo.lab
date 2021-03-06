CLEAR({broadphase:"BVT", timer:false, timestep:1/60, iteration:2, G:-10});

function initDemo()
{
    NAME("Infinite Terrain", "use arrow key to move terrain");
    ADD({type:"ground", size:[200,1,200], pos:[0,0.5,0] });
    ADD({type:"terrain", size:[200,10,200], pos:[0,0,0],  div:[128,128], Move:true });

    var max = 50;
    var px, py, pz, sx, sy, sz;

    for (var i=0; i!==max; ++i ){
        sx = 1 + Math.random();
        sy = 1 + Math.random();
        sz = 1 + Math.random();
        px = -10+Math.random()*20;
        py = 1+i;
        pz = -10+Math.random()*20;

        ADD({type:"box", size:[sx,sy,sz], pos:[px, py, pz], mass:1, noSleep:true });
    }
}