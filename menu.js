// Je repère l'en-tête pour pouvoir le masquer au défilement.
const siteHeader = document.querySelector(".site-header");

// Je repère la boîte de dialogue utilisée comme menu mobile.
const menuOverlay = document.querySelector(".menu-overlay");

// Je repère le bouton qui ouvre le menu.
const openMenuButton = document.querySelector(".nav-button");

// Je repère le bouton qui ferme le menu.
const closeMenuButton = document.querySelector(".menu-close");

// Je repère tous les liens du menu mobile pour le fermer après un clic.
const menuLinks = document.querySelectorAll(".menu-link");

// Je mémorise la dernière position verticale de la page.
let lastScrollPosition = window.scrollY;

// J'ouvre la boîte de dialogue quand on clique sur le burger.
if (openMenuButton && menuOverlay) {
  openMenuButton.addEventListener("click", () => {
    menuOverlay.showModal();
  });
}

// Je ferme la boîte de dialogue quand on clique sur le bouton de fermeture.
if (closeMenuButton && menuOverlay) {
  closeMenuButton.addEventListener("click", () => {
    menuOverlay.close();
  });
}

// Je ferme aussi le menu quand un lien de navigation est choisi.
if (menuOverlay) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
      menuOverlay.close();
    });
  });
}

// Je compare la direction du scroll pour cacher ou montrer la navigation.
window.addEventListener("scroll", () => {
  // Je lis la position actuelle de défilement.
  const currentScrollPosition = window.scrollY;

  // Je n'anime pas la barre si le menu mobile est ouvert.
  if (menuOverlay && menuOverlay.open) {
    return;
  }

  // Je masque la navigation si l'utilisateur descend suffisamment.
  if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 40 && siteHeader) {
    siteHeader.style.transform = "translateY(-100%)";
  }

  // Je réaffiche la navigation dès que l'utilisateur remonte.
  if ((currentScrollPosition < lastScrollPosition || currentScrollPosition <= 40) && siteHeader) {
    siteHeader.style.transform = "translateY(0)";
  }

  // Je garde la nouvelle position pour la prochaine comparaison.
  lastScrollPosition = currentScrollPosition;
});
