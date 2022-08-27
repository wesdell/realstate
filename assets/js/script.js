// hamburguer button
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
      $navmenu = d.querySelector(".nav-menu");

  $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $navmenu.classList.toggle("active");
  });

  d.addEventListener("click", (e) => {
      if(!e.target.matches(".nav-menu a")) return false;

      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $navmenu.classList.remove("active");
  })
})(document);