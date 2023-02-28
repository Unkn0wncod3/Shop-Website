// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {

    // Das Menü-Icon auswählen und auf Klick-Events lauschen
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', function() {
  
      // Die Navbar auswählen
      var navbar = document.querySelector('.navbar');
  
      // Wenn die Navbar bereits angezeigt wird, ausblenden
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
      // Wenn die Navbar ausgeblendet ist, anzeigen
      else {
        navbar.classList.add('show');
      }
  
    });
  
});