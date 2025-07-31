// Gestion professionnelle du panier WoréStor
document.addEventListener('DOMContentLoaded', function() {
  const panierContent = document.getElementById('panier-content');
  const panierVide = document.getElementById('panier-vide');
  const panierTotal = document.getElementById('panier-total');
  const panierTable = document.getElementById('panier-table');

  // Récupère le panier depuis localStorage
  let panier = JSON.parse(localStorage.getItem('panier')) || [];

  function afficherPanier() {
    panierContent.innerHTML = '';
    let total = 0;
    if (panier.length === 0) {
      panierTable.style.display = 'none';
      panierVide.style.display = 'block';
      panierTotal.textContent = '';
      return;
    }
    panierTable.style.display = 'table';
    panierVide.style.display = 'none';
    panier.forEach((produit, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="text-align:center;"><img src="${produit.image}" alt="${produit.nom}" style="width:60px;height:60px;border-radius:8px;object-fit:cover;"></td>
        <td style="font-weight:600;">${produit.nom}</td>
        <td style="color:crimson;font-weight:600;">${produit.prix} GNF</td>
        <td>
          <input type="number" min="1" value="${produit.quantite}" style="width:60px;padding:6px;border-radius:6px;border:1px solid #eee;text-align:center;" data-index="${index}" class="panier-quantite">
        </td>
        <td style="font-weight:600;">${(produit.prix * produit.quantite).toLocaleString()} GNF</td>
        <td><button class="btn" style="padding:4px 10px;font-size:14px;background:rgb(152,0,34);" data-index="${index}" title="Supprimer"><i class="fas fa-trash"></i></button></td>
      `;
      panierContent.appendChild(tr);
      total += produit.prix * produit.quantite;
    });
    panierTotal.textContent = `Total : ${total.toLocaleString()} GNF`;
  }

  // Modification de la quantité
  panierContent.addEventListener('change', function(e) {
    if (e.target.classList.contains('panier-quantite')) {
      const index = e.target.getAttribute('data-index');
      let value = parseInt(e.target.value);
      if (isNaN(value) || value < 1) value = 1;
      panier[index].quantite = value;
      localStorage.setItem('panier', JSON.stringify(panier));
      afficherPanier();
    }
  });

  // Suppression d'un produit
  panierContent.addEventListener('click', function(e) {
    if (e.target.closest('button')) {
      const index = e.target.closest('button').getAttribute('data-index');
      panier.splice(index, 1);
      localStorage.setItem('panier', JSON.stringify(panier));
      afficherPanier();
    }
  });

  afficherPanier();
});
