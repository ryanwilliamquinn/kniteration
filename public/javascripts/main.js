window.onload = function(){

    //padding around grid
    var p = 10;

    var canvas = document.getElementById('myCanvas');
    var rows, stitches;
    var scale = 1;

    canvas.height = 1000;
    canvas.width = 1000;

    var context = canvas.getContext("2d");

    // stitches are horizontal, rows are vertical
    function drawBoard(numStitches, numRows){
        // this block is for resetting the canvas
        canvas.width = canvas.width

        // standard grid size
        var rowWidth = 25;
        var rowHeight = 25;

        // if the standard grid size is bigger than the canvas, lets scale it...
        var gridWidth = rowWidth * numStitches;
        var gridHeight = rowHeight * numRows;
        
        console.log(scale);

        if (scale != 1) {
            context.scale(scale, scale);
        } 
        /*
        else {
            if ((gridWidth > canvas.width) || (gridHeight > canvas.height)) {
                context.scale(0.5, 0.5);
            }
        }
        */

        for (var x = 0; x <= numStitches; x++) {
            context.moveTo(0.5 + x * rowWidth + p, p);
            context.lineTo(0.5 + x * rowWidth + p, (rowHeight * numRows) + p);
        }

        for (var x = 0; x <= numRows; x++) {
            context.moveTo(p, 0.5 + x * rowHeight + p);
            context.lineTo(rowWidth * numStitches + p, 0.5 + x * rowHeight + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }

    $("#initialSubmit").click(function(){
        stitches = $('#stitches').val();
        rows = $('#rows').val();
        if (stitches == undefined || rows == undefined) {
            alert("i need a number for both stitches and rows!");
        } else {
            drawBoard(stitches, rows);  
        }
    });

    $("#loadPattern").click(function(){
        $json = $.getJSON(routes.loadPattern({name: $('#patternSelect option:selected').val()}), function(data) {
            rows = data.rows;
            stitches = data.columns;
            drawBoard(data.columns, data.rows);
        });
    }); 

    $("#increaseCellSize").click(function() {
        scale += .1;
        drawBoard(stitches, rows);
    });

    $("#decreaseCellSize").click(function() {
        scale -= .1;
        drawBoard(stitches, rows);
    });
}
