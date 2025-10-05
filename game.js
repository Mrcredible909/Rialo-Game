const logo = document.getElementById("logo");
const player = document.getElementById("player");
const scoreDisplay = document.getElementById("score");

let score = 0;
let logoSpeed = 2;
let playerX = 175;
let logoX = Math.random() * 350;
let logoY = 0;

// Gerakan pemain
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerX > 0) {
    playerX -= 20;
  }
  if (e.key === "ArrowRight" && playerX < 340) {
    playerX += 20;
  }
  player.style.left = playerX + "px";
});

// Loop game
function gameLoop() {
  logoY += logoSpeed;
  logo.style.top = logoY + "px";
  logo.style.left = logoX + "px";

  // Cek tabrakan
  if (
    logoY >= 470 &&
    logoX >= playerX - 30 &&
    logoX <= playerX + 50
  ) {
    score++;
    scoreDisplay.textContent = score;
    resetLogo();
  }

  // Reset kalau logo jatuh
  if (logoY > 500) {
    resetLogo();
  }

  requestAnimationFrame(gameLoop);
}

function resetLogo() {
  logoY = 0;
  logoX = Math.random() * 350;
}

gameLoop();
