const canvas = document.getElementById("oceanCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 150;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let waveOffset = 0;

function drawWave(amplitude, wavelength, speed, color) {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  for (let x = 0; x <= canvas.width; x++) {
    const y =
      amplitude *
        Math.sin((x + waveOffset) / wavelength) +
      canvas.height - 40;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawWave(20, 100, 0.02, "rgba(0,119,190,0.8)");
  drawWave(15, 150, 0.015, "rgba(0,119,190,0.6)");
  drawWave(10, 200, 0.01, "rgba(0,119,190,0.4)");

  waveOffset += 2;

  requestAnimationFrame(animate);
}

animate();
