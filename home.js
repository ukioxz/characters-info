function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const bt1 = document.getElementById('button')

  bt1.addEventListener('click', (event) => {
    window.scrollTo({
    top: 800,
    behavior: "smooth"
});
  });

let elemAyato = document.getElementById('ayato');
let videoAyato = document.getElementById('video-ayato');
let imgAyato = document.getElementById('img_ayato_home');
elemAyato.onmouseover = function () {
        videoAyato.style.display = "block";
        imgAyato.style.display = "none";
    };
elemAyato.onmouseleave = function () {
        videoAyato.style.display = "none";
        imgAyato.style.display = "block";
        }
