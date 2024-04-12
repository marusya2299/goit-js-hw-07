'use strict';

const controls = document.querySelector('#controls');
const input = controls.querySelector("input");
const boxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
let amount = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    for (let i = 0; i < amount; i++)
    {
        const box = document.createElement("div");
        const size = 30 + i*10;
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        boxes.append(box);
    }
}

create.addEventListener("click", (event) => {
    const amount = input.value;

    if (amount <= 100 && amount >= 1) {
        createBoxes(amount);
        input.value = '';
    }
});

destroy.addEventListener('click', (event)=> boxes.innerHTML = '');