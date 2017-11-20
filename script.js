images = ['./guy_fieri.jpg', './cool_dude.jpg'];

function inView(img_container) {
  const rect = img_container.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function loadImage(img_container) {
  img_container.className = 'img-container-loaded';
  var img = document.createElement('img');
  img.setAttribute('src', images[0]);
  images.shift();
  img_container.appendChild(img);
}

function checkImages() {
  const img_container = document.getElementsByClassName('image-container')[0];
  if (inView(img_container)) { loadImage(img_container); }
}

document.addEventListener('DOMContentLoaded', () => {
  interval = setInterval(checkImages, 500);
  document.addEventListener('DOMNodeInserted', () =>{
    if (images.length === 0) { clearInterval(interval); }
  });
})
