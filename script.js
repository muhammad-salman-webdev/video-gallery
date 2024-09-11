const galleryBtns = document.querySelectorAll(
  "#customGallerySection .c-btns > button[data-card-label]"
);

const galleryCards = document.querySelectorAll(
  "#customGallerySection .custom_gallery-cards > .custom_gallery-card"
);

galleryBtns.forEach((btn, i) => {
  if (btn.classList.contains("active")) {
    const label = btn.getAttribute("data-card-label");
    galleryCards.forEach((card) => {
      const cLabel = card.getAttribute("data-card-label");
      if (cLabel === label) {
        card.classList.add("show");
        card.classList.add("anim");
      }
    });
  }

  btn.addEventListener("click", () => {
    galleryBtns.forEach((_b) => _b.classList.remove("active"));
    btn.classList.add("active");
    const label = btn.getAttribute("data-card-label");
    galleryCards.forEach((card) => {
      // Showing new cards
      const cLabel = card.getAttribute("data-card-label");
      if (label === "all") {
        card.classList.add("show");
        setTimeout(() => {
          card.classList.add("anim");
        }, 10);
      } else {
        if (cLabel === label) {
          card.classList.add("show");
          setTimeout(() => {
            card.classList.add("anim");
          }, 10);
        } else {
          // Hiding previous cards
          card.classList.remove("anim");
          setTimeout(() => {
            card.classList.remove("show");
          }, 600);
        }
      }
    });
  });
});

galleryCards.forEach((card, i) => {
  const thumbnail = card.querySelector(".box"),
    overLay = card.querySelector(".overlay"),
    closeIcon = card.querySelector(".close-icon"),
    playPauseBtn = card.querySelector(".play-pause-btn"),
    video = card.querySelector("video");

  thumbnail.addEventListener("click", () => {
    card.classList.add("show-popup");
    setTimeout(() => {
      card.classList.add("anim-popup");
    }, 10);
  });

  overLay.addEventListener("click", () => {
    card.classList.remove("anim-popup");
    setTimeout(() => {
      card.classList.remove("show-popup");
    }, 300);
    playPauseBtn.click();
  });
  closeIcon.addEventListener("click", () => {
    card.classList.remove("anim-popup");
    setTimeout(() => {
      card.classList.remove("show-popup");
    }, 300);
    playPauseBtn.click();
  });

  playPauseBtn.addEventListener("click", (e) => {
    playPauseBtn.classList.toggle("played");
    if (playPauseBtn.classList.contains("played")) {
      video.play();
    } else {
      video.pause();
    }
  });
});
