// Badge panier professionnel
function mettreAJourBadgePanier() {
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  let totalQte = panier.reduce((acc, p) => acc + p.quantite, 0);
  let panierIcon = document.getElementById('panier');
  let badge = document.querySelector('.badge');
  if (!badge && panierIcon) {
    badge = document.createElement('span');
    badge.className = 'badge';
    badge.style.position = 'absolute';
    badge.style.top = '-8px';
    badge.style.right = '-8px';
    badge.style.background = '#c2185b';
    badge.style.color = '#fff';
    badge.style.borderRadius = '50%';
    badge.style.padding = '2px 6px';
    badge.style.fontSize = '0.8rem';
    badge.style.fontWeight = 'bold';
    badge.style.zIndex = '1003';
    badge.style.display = 'none';
    panierIcon.style.position = 'relative';
    panierIcon.appendChild(badge);
  }
  if (badge) {
    badge.textContent = totalQte;
    badge.style.display = totalQte > 0 ? 'inline-block' : 'none';
  }
}
document.addEventListener('DOMContentLoaded', mettreAJourBadgePanier);

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Affiche un message de confirmation
      const btn = form.querySelector('.btn-contact');
      btn.disabled = true;
      btn.textContent = 'Message envoyé !';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Envoyer';
        form.reset();
      }, 2000);
    });
  }
});

const cont=document.querySelector('.bar-recherche');
const rechercheIcon=document.querySelector('#recherche');
rechercheIcon.addEventListener('click',()=>{
    cont.classList.toggle('active');
    div.classList.remove('active');
    userContainer.classList.remove('active');
});
const div=document.querySelector(".cart-panier");
const panier=document.querySelector("#panier");
panier.addEventListener('click',()=>{
    div.classList.toggle('active');
    cont.classList.remove('active');
    userContainer.classList.remove('active');
}); 
const userContainer=document.querySelector('.user-container');
const user=document.querySelector('#user');
user.addEventListener('click',()=>{
    userContainer.classList.toggle('active');
    div.classList.remove('active');
    cont.classList.remove('active');
});



