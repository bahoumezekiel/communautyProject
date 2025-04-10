// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'URL courante
    const currentUrl = window.location.pathname;
    
    // Récupérer tous les liens de navigation
    const navLinks = document.querySelectorAll('.custom-nav-link');
    
    // Parcourir tous les liens
    navLinks.forEach(link => {
      // Récupérer l'URL du lien
      const linkUrl = link.getAttribute('href');
      
      // Si l'URL du lien correspond à l'URL courante ou si l'URL courante commence par l'URL du lien
      if (linkUrl === currentUrl || 
          (linkUrl !== '#' && linkUrl !== '/' && currentUrl.startsWith(linkUrl))) {
        // Ajouter la classe active
        link.classList.add('active');
      }
      
      // Ajouter un écouteur d'événement pour le clic
      link.addEventListener('click', function() {
        // Retirer la classe active de tous les liens
        navLinks.forEach(l => l.classList.remove('active'));
        // Ajouter la classe active au lien cliqué
        this.classList.add('active');
      });
    });
  });