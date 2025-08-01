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
// Ajout au panier avec image correcte
document.querySelectorAll('.cart-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const cart = btn.closest('.cart');
    const nom = cart.querySelector('.cart-title').textContent.trim();
    const prixText = cart.querySelector('.cart-price').textContent.trim();
    const prix = parseInt(prixText.replace(/[^0-9]/g, ''));
    const image = cart.querySelector('img').getAttribute('src');
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    const index = panier.findIndex(p => p.nom === nom && p.image === image);
    if (index !== -1) {
      panier[index].quantite += 1;
    } else {
      panier.push({ nom, prix, image, quantite: 1 });
    }
    localStorage.setItem('panier', JSON.stringify(panier));
    alert('Produit ajouté au panier !');
    if (typeof mettreAJourBadgePanier === 'function') {
      mettreAJourBadgePanier();
    }
  });
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


// Find the menu icon and the menu itself
const menuIcon = document.getElementById('menu');
const menu = document.querySelector('.menu');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    menu.classList.toggle('active');
    
    // Optional: close other fly-out panels (search, cart, user)
    const cont = document.querySelector('.bar-recherche');
    const div = document.querySelector(".cart-panier");
    const userContainer = document.querySelector('.user-container');
    
    cont.classList.remove('active');
    div.classList.remove('active');
    userContainer.classList.remove('active');
});

// Close the menu if a link inside it is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});