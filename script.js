// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Array of image URLs
  const imageUrls = [
    'https://anshishere.w3spaces.com/2.png'
  ];

  // Function to set a random background image
  function setRandomBackgroundImage() {
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
  }

  // Set random background image on page load
  setRandomBackgroundImage();

  // Your existing click event listener
  const widgets = document.querySelectorAll('.widget');

  widgets.forEach(widget => {
    widget.addEventListener('click', (event) => {
      event.preventDefault();
      const targetUrl = widget.querySelector('a').getAttribute('data-target');
      window.open(targetUrl, '_blank'); // Opens in a new tab
    });
  });
});
