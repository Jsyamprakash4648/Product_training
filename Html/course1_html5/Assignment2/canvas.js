

function display()
{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext('2d');
    const cubeSize = 50;
    const gap = 10;
    const startX = 50;
    const startY = 50;

    // Function to draw a cube
    function drawCube(x, y, size, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x, y, size, size);
    }

    // Function to draw a 3x3 cube structure
    function draw3x3Cube() {
        let currentX = startX;
        let currentY = startY;
        const colors = '#0000FF';

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                
                drawCube(currentX, currentY, cubeSize, colors);
                currentX += cubeSize + gap;
            }
            currentX = startX;
            currentY += cubeSize + gap;
        }
    }

    // Clear canvas
    // function clearCanvas() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // }

    // Redraw everything
    function redraw() {
       // clearCanvas();
        draw3x3Cube();
    }

    

    // Call redraw function initially
    redraw();

    
    
}

// window.addEventListener('onload',display(),false);


