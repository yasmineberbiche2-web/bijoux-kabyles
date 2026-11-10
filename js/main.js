/* =========================================================
   Tiziri — Bijoux kabyles
   Script commun à toutes les pages
   ========================================================= */

// On attend que la page soit chargée avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
  initialiserMenuMobile();
  initialiserFiltres();
  initialiserFormulaire();
  afficherAnnee();
});

/* ---------- 1. Menu burger (mobile) ---------- */
function initialiserMenuMobile() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", function () {
    const estOuvert = menu.classList.toggle("ouvert");
    burger.classList.toggle("ouvert", estOuvert);
    burger.setAttribute("aria-expanded", estOuvert);
    burger.setAttribute("aria-label", estOuvert ? "Fermer le menu" : "Ouvrir le menu");
  });
}

/* ---------- 2. Filtres de la page Collection ---------- */
function initialiserFiltres() {
  const boutons = document.querySelectorAll(".filtre");
  const cartes = document.querySelectorAll(".carte[data-categorie]");
  const compteur = document.getElementById("nb-produits");

  // Si on n'est pas sur la page Collection, on s'arrête
  if (boutons.length === 0) return;

  boutons.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      const filtre = bouton.dataset.filtre;

      // Mettre en évidence le bouton cliqué
      boutons.forEach(function (b) {
        b.classList.remove("actif");
      });
      bouton.classList.add("actif");

      // Afficher ou cacher les cartes selon la catégorie
      let nbVisibles = 0;
      cartes.forEach(function (carte) {
        const correspond = filtre === "tous" || carte.dataset.categorie === filtre;
        carte.classList.toggle("cache", !correspond);
        if (correspond) nbVisibles++;
      });

      compteur.textContent = nbVisibles;
    });
  });
}

/* ---------- 3. Validation du formulaire de contact ---------- */
function initialiserFormulaire() {
  const formulaire = document.getElementById("formulaire-contact");
  if (!formulaire) return;

  const nom = document.getElementById("nom");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const confirmation = document.getElementById("confirmation");

  formulaire.addEventListener("submit", function (evenement) {
    // Empêche l'envoi réel du formulaire (pas de serveur dans ce projet)
    evenement.preventDefault();

    const nomValide = nom.value.trim().length >= 2;
    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const messageValide = message.value.trim().length >= 10;

    marquerChamp(nom, nomValide);
    marquerChamp(email, emailValide);
    marquerChamp(message, messageValide);

    if (nomValide && emailValide && messageValide) {
      confirmation.textContent =
        "Merci " + nom.value.trim() + " ! Votre message a bien été envoyé. Nous vous répondrons sous 48 heures.";
      confirmation.classList.add("visible");
      formulaire.reset();
    } else {
      confirmation.classList.remove("visible");
    }
  });

  // On retire l'erreur dès que l'utilisateur corrige le champ
  [nom, email, message].forEach(function (champ) {
    champ.addEventListener("input", function () {
      champ.parentElement.classList.remove("erreur");
    });
  });
}

// Ajoute ou retire la classe "erreur" sur le bloc .champ
function marquerChamp(champ, estValide) {
  champ.parentElement.classList.toggle("erreur", !estValide);
}

/* ---------- 4. Année automatique dans le pied de page ---------- */
function afficherAnnee() {
  document.querySelectorAll(".annee").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
}
