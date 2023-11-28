const cooker = document.getElementById("cooker");
const cake = document.getElementById("cake");

function jump() {
    if (cooker.classList !== "jump") {
        cooker.classList.add("jump");

        setTimeout(function () {
            cooker.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {
    // get current dino Y position
    let cookerTop = parseInt(window.getComputedStyle(cooker).getPropertyValue("top"));

    // get current cactus X position
    let cakeLeft = parseInt(
        window.getComputedStyle(cake).getPropertyValue("left")
    );

    // detect collision
    if (cakeLeft < 50 && cakeLeft > 0 && cookerTop >= 140) {
        // collision
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});