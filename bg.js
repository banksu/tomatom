const body = document.querySelector("body");

function handleImageLoad() {
  console.log("Sdfsfsdf");
}

function paintImage() {
  const image = new Image();
  image.src = "https://source.unsplash.com/random";
  image.classList.add("bgImage");
  body.prepend(image);
  image.addEventListener("loadend", handleImageLoad);
}

function init() {
  paintImage();
}

init();
