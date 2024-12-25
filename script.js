document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

 
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle", "stroke": { "width": 0 } },
      "opacity": { "value": 0.5, "anim": { "enable": false } },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff" },
      "move": { "enable": true, "speed": 6 }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      }
    },
    "retina_detect": true
  });


  particlesJS("particles-js-bottom", {
    "particles": {
      "number": { "value": 25, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle", "stroke": { "width": 0 } },
    },
    "interactivity": {}
  });


  const albums = document.querySelectorAll('.carousel-item');
  let index = 0;

  function displayAlbums() {
    albums.forEach(album => album.classList.remove('active'));
    albums[index].classList.add('active');
    index = (index + 1) % albums.length;
    setTimeout(displayAlbums, 3000);
  }

  displayAlbums();

  window.showTieSheet = () => window.location.href = "Tie.html";
  window.showLeague = () => window.location.href = "Final.cpp";
  window.showMusic = () => window.location.href = "music.html";
  window.showCV = () => window.location.href = "CV.pdf";
});
