 // Mobile menu
    document.getElementById('menu-toggle').addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // Typewriter nama (tetap)
    (function(){
      const names = ["Fajar Hermawan", "AI Developer"];
      let i = 0, j = 0;
      let isDeleting = false;
      const nameEl = document.getElementById("dynamic-name");

      function typeEffect(){
        const full = names[i];
        if (isDeleting) { j--; } else { j++; }
        nameEl.textContent = full.substring(0, j);

        if (!isDeleting && j === full.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1200);
          return;
        }
        if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % names.length;
        }
        setTimeout(typeEffect, isDeleting ? 80 : 120);
      }
      typeEffect();
    })();

    // Re-run animasi saat diklik (About & Foto)
    function rerunAnimation(el, cls){
      el.classList.remove(cls);
      void el.offsetWidth; // force reflow
      el.classList.add(cls);
    }

    const aboutText = document.getElementById('about-text');
    const aboutPhoto = document.getElementById('about-photo');

    aboutText.addEventListener('click', () => rerunAnimation(aboutText, 'slide-left'));
    aboutPhoto.addEventListener('click', () => rerunAnimation(aboutPhoto, 'slide-right'));

    // Reveal project cards saat muncul di viewport
    document.addEventListener("DOMContentLoaded", () => {
      const cards = document.querySelectorAll(".project-card");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      }, { threshold: 0.2 });

      cards.forEach(card => observer.observe(card));
    });