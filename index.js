function showDivArataki() {
  window.addEventListener('scroll', function(){
    document.getElementById('normal_attack_itto').style.opacity = 1;
    document.getElementById('normal_attack_itto').style.transition = "all 1s";
    document.getElementById('charged_attack_itto').style.opacity = 1;
    document.getElementById('charged_attack_itto').style.transition = "all 1s";
    document.getElementById('elemental_skills_itto').style.opacity = 1;
    document.getElementById('elemental_skills_itto').style.transition = "all 1s";
    document.getElementById('ultimate_itto').style.opacity = 1;
    document.getElementById('ultimate_itto').style.transition = "all 1s";
  });

   document.getElementById('img-Arataki').style.display = "block";
   document.getElementById('img-Diluc').style.display = "none";
   document.getElementById('img-Keya').style.display = "none";
   document.getElementById('img-Ayato').style.display = "none";
   document.getElementById('img-Zhongli').style.display = "none";

   document.getElementById('info_itto').style.display = "block";
   document.getElementById('info_diluc').style.display = "none";
   document.getElementById('info_keya').style.display = "none";
   document.getElementById('info_ayato').style.display = "none";
   document.getElementById('info_zhongli').style.display = "none";
}
function showDivDiluc() {
  /*window.addEventListener('scroll', function(){
    document.getElementById('normal_attack_diluc').style.opacity = 1;
    document.getElementById('normal_attack_diluc').style.transition = "all 1s";
    document.getElementById('charged_attack_diluc').style.opacity = 1;
    document.getElementById('charged_attack_diluc').style.transition = "all 1s";
    document.getElementById('elemental_skills_diluc').style.opacity = 1;
    document.getElementById('elemental_skills_diluc').style.transition = "all 1s";
    document.getElementById('ultimate_diluc').style.opacity = 1;
    document.getElementById('ultimate_diluc').style.transition = "all 1s";
  });*/

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  const backAva = document.getElementById('card2')

    backAva.addEventListener('click', (event) => {
      window.scrollTo({
      top: 2780,
      behavior: "smooth"
  });
});

   document.getElementById('img-Arataki').style.display = "none";
   document.getElementById('img-Diluc').style.display = "block";
   document.getElementById('img-Keya').style.display = "none";
   document.getElementById('img-Ayato').style.display = "none";
   document.getElementById('img-Zhongli').style.display = "none";

   document.getElementById('info_itto').style.display = "none";
   document.getElementById('info_diluc').style.display = "block";
   document.getElementById('info_keya').style.display = "none";
   document.getElementById('info_ayato').style.display = "none";
   document.getElementById('info_zhongli').style.display = "none";

   document.getElementById('name_diluc').style.display = "block";
   document.getElementById('name_diluc_black').style.display = "block";
   document.getElementById('name_diluc_jap_black').style.display = "block";
   document.getElementById('name_diluc_jap_white').style.display = "block";
   document.getElementById('name_diluc_jap_white_shadow').style.display = "block";
   document.getElementById('diluc_desc_talants1').style.display = "block";
   document.getElementById('diluc_desc_talants2').style.display = "block";

   document.getElementById('parallelogram_1').style.background = "red";

}
function showDivKeya() {
   document.getElementById('img-Arataki').style.display = "none";
   document.getElementById('img-Diluc').style.display = "none";
   document.getElementById('img-Keya').style.display = "block";
   document.getElementById('img-Ayato').style.display = "none";
   document.getElementById('img-Zhongli').style.display = "none";

   document.getElementById('info_itto').style.display = "none";
   document.getElementById('info_diluc').style.display = "none";
   document.getElementById('info_keya').style.display = "block";
   document.getElementById('info_ayato').style.display = "none";
   document.getElementById('info_zhongli').style.display = "none";

   document.getElementById('parallelogram_1').style.background = "blue";
}
function showDivAyato() {
   document.getElementById('img-Arataki').style.display = "none";
   document.getElementById('img-Diluc').style.display = "none";
   document.getElementById('img-Keya').style.display = "none";
   document.getElementById('img-Ayato').style.display = "block";
   document.getElementById('img-Zhongli').style.display = "none";

   document.getElementById('info_itto').style.display = "none";
   document.getElementById('info_diluc').style.display = "none";
   document.getElementById('info_keya').style.display = "none";
   document.getElementById('info_ayato').style.display = "block";
   document.getElementById('info_zhongli').style.display = "none";
}
function showDivZhongli() {
   document.getElementById('img-Arataki').style.display = "none";
   document.getElementById('img-Diluc').style.display = "none";
   document.getElementById('img-Keya').style.display = "none";
   document.getElementById('img-Ayato').style.display = "none";
   document.getElementById('img-Zhongli').style.display = "block";

   document.getElementById('info_itto').style.display = "none";
   document.getElementById('info_diluc').style.display = "none";
   document.getElementById('info_keya').style.display = "none";
   document.getElementById('info_ayato').style.display = "none";
   document.getElementById('info_zhongli').style.display = "block";
}
