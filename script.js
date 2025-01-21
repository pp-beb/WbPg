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

  window.showTieSheet = () => window.open("Tie.html", "_blank");
  window.showLeague = () => window.open("Final.cpp", "_blank");
  window.showMusic = () => window.open("music.html", "_blank");
  window.showClock = () => window.open("clock.html", "_blank");
  window.showHover = () => window.open("hoverEffects.html", "_blank");
  window.showConverter = () => window.open("currency.html", "_blank");
  window.showCV = () => window.open("CV.pdf", "_blank");
  window.showCCT = () => window.open("CCT.pdf", "_blank");
  
});

function removeCover() {
  document.getElementById('body').style.visibility==="hidden"
  document.getElementById('body').style.visibility="visible";
  document.getElementById('cover').style.visibility="hidden";
  document.getElementById('backIcon').style.visibility="visible";
  document.getElementById('cool-button-cover').style.visibility="hidden";
  document.getElementById('particles-js').style.zIndex="-1";
  document.getElementById('particles-js-bottom').style.zIndex="-1";
 
  
}

function gotoCover(){
  document.getElementById('body').style.visibility="hidden";
  document.getElementById('cover').style.visibility="visible";
  document.getElementById('HomeIcon').style.visibility="visible";
  document.getElementById('registerIcon').style.visibility="visible";
  document.getElementById('backIcon').style.visibility="hidden";
  document.getElementById('cool-button-cover').style.visibility="visible";
  document.getElementById('particles-js').style.zIndex="3";
  document.getElementById('particles-js-bottom').style.zIndex="3";
}