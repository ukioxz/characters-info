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

  let audioHome = document.querySelector('.sound_hover');

  let dilucHome = document.getElementById('diluc');
  let kaeyaHome = document.getElementById('kaeya');
  let ayatoHome = document.getElementById('ayato');
  let zhongliHome = document.getElementById('zhongli');

  dilucHome.onmouseover = function () {
          audioHome.play();
      };
  kaeyaHome.onmouseover = function () {
          audioHome.play();
      };
  ayatoHome.onmouseover = function () {
          audioHome.play();
      };
  zhongliHome.onmouseover = function () {
          audioHome.play();
      };
/*let elemAyato = document.getElementById('ayato');
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
*/
