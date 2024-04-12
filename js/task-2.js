'use strict';

const listGallery = document.querySelector(".gallery");

const listGalleryItemFirst = document.createElement("li");
const listGalleryImageFirst = document.createElement("img");
listGalleryImageFirst.src = "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg";
listGalleryImageFirst.alt = "Lighthouse Coast Sea";

const listGalleryItemSecond = document.createElement("li");
const listGalleryImageSecond = document.createElement("img");
listGalleryImageSecond.src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260";
listGalleryImageSecond.alt = "Orange and White Koi Fish Near Yellow Koi Fish";

const listGalleryItemThird = document.createElement("li");
const listGalleryImageThird = document.createElement("img");
listGalleryImageThird.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260";
listGalleryImageThird.alt = "Group of Horses Running";

listGallery.prepend(listGalleryImageFirst, listGalleryImageSecond, listGalleryImageThird);