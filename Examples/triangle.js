"use strict";

var gl;
var points;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }


    var vertices = new Float32Array([-0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.7, 0.7, 0.9, 0.9, 0.7, 0.9]);

//    var _2vertices = new Float32Array([0.7, 0.7, 0.9, 0.9, 0.7, 0.9]);

    //  Configure WebGL

    gl.viewport( 0, 0, canvas.width-100, canvas.height );
    gl.clearColor( 0.2, 0.24, 0.014, 0.688 );

    //  Load shaders and initialize attribute buffers

    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.clear( gl.COLOR_BUFFER_BIT );

    render();
    setTimeout(function(){
        /*2 triangle*/
        //  Load shaders and initialize attribute buffers

        var program2 = initShaders( gl, "vertex-shader2", "fragment-shader" );
        gl.useProgram( program2 );

        // Load the data into the GPU

        var bufferId2 = gl.createBuffer();
//        gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
        gl.bufferData( gl.ARRAY_BUFFER, _2vertices, gl.STATIC_DRAW );

        // Associate out shader variables with our data buffer

        var vPosition2 = gl.getAttribLocation( program2, "vPosition2" );
        gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( vPosition2 );

//        render();
    }, 500);

};


function render() {
//    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, 6 );
}
