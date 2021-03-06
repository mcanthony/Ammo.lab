CLEAR({broadphase:"BVT", timer:false, timestep:1/60, iteration:2, G:-10});

function initDemo()
{
    NAME("Ball pool");
    // ground
    ADD({ type:"ground", size:[20,3,20], pos:[0,-1.5,0] });
    // wall
    ADD({ type:"boxbasic", size:[20,10,1], pos:[0,5,-9.5] });
    ADD({ type:"boxbasic", size:[20,10,1], pos:[ 0,5,9.5] });
    ADD({ type:"boxbasic", size:[1,10,18], pos:[-9.5,5,0] });
    ADD({ type:"boxbasic", size:[1,10,18], pos:[ 9.5,5,0] });

    var max = 333;
    var px, pz, py, s;

    for (var i=0; i!==max; ++i ){
        s = 0.1+Math.random();
        px = -5+Math.random()*10;
        pz = -5+Math.random()*10;
        py = 1+i+(i*0.2);
        ADD({ type:"sphere", size:[s], pos:[px,py,pz], phy:[0.5, 0.1], mass:s });
    }
}