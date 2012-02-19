window.onload = function(){
    //grid width and height
    var bw = 800;
    var bh = 800;
    //padding around grid
    var p = 10;
    //size of canvas
    var cw = bw + (p*2) + 1;
    var ch = bh + (p*2) + 1;

    var canvas = document.getElementById('myCanvas');

    canvas.height = ch;
    canvas.width = 1000;

    var context = canvas.getContext("2d");

    // stitches are horizontal, rows are vertical
    function drawBoard(numStitches, numRows){
        // if we want n number of horizontal boxes, we should have 
        var rowWidth = bw / numStitches;
        for (var x = 0; x <= bw; x += rowWidth) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        var rowHeight = bh / numRows;
        for (var x = 0; x <= bh; x += rowHeight) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }

    $("#initialSubmit").click(function(){
        var stitches = $('#stitches').val();
        var rows = $('#rows').val();
        if (stitches == undefined || rows == undefined)
        {
            alert("i need a number for both stitches and rows!");
        }
            else
        {
            drawBoard(stitches, rows);  
            $.getJSON('http://127.0.0.1:1337?jsoncallback=?', function(data) {
                console.log("hey");
            });
        }
    });

    $("#loadPattern").click(function(){
        $json = $.getJSON(routes.loadPattern({id: $('#loadId').val()}), function(data) {
            console.log(data);
        });
   }); 
}
