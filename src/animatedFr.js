const buttonClick = document.querySelector(".click");
const buttonReset = document.querySelector(".reset");
const circle = document.querySelector(".circle");

let flag = false;
let count = 0;
let idInterval;

console.dir(circle);

let animatedCircle = () => {
    idInterval = requestAnimationFrame(animatedCircle);
    count++;
    if (count < window.innerWidth - circle.scrollWidth) {
        circle.style.left = count + "px";
    } else {
        cancelAnimationFrame(idInterval);
    }
};

buttonClick.addEventListener("click", () => {
    if (flag) {
        cancelAnimationFrame(idInterval);
        flag = false;
    } else {
        idInterval = requestAnimationFrame(animatedCircle);
        flag = true;
        buttonClick.textContent = "stop";
    }
});

buttonReset.addEventListener("click", () => {
    cancelAnimationFrame(idInterval);
    console.log(count);
    count = 0;
    circle.style.left = 0;
    buttonClick.textContent = "start";
});